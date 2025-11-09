import * as fs from 'fs/promises';
import * as path from 'path';
import { GoogleGenAI } from '@google/genai';

const ai = new GoogleGenAI({});
const DATA_FILE_PATH = path.join(process.cwd(), 'data', 'personal_data.txt');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: '缺少消息内容' });
  }

  try {
    const personalData = await fs.readFile(DATA_FILE_PATH, 'utf-8');
    const systemPrompt = `
      Vous êtes un assistant intelligent basé sur mes informations de profil personnel. Vos réponses doivent être strictement basées sur les [Informations de Profil Personnel] fournies ci-dessous.
--- Directive Langue --- 
Veuillez toujours fournir votre réponse dans la langue de la requête de l'utilisateur (par exemple : Anglais, Français).
Si l'utilisateur pose une question en anglais, répondre en anglais. Si l'utilisateur pose une question en français, répondre en français.
Si la réponse à la question ne se trouve pas dans les [Informations de Profil Personnel], veuillez utiliser le format et le contenu suivants, et traduire en fonction de la langue de la requête de l'utilisateur :
Version française du [Modèle de réponse sans réponse] :
Je n'ai actuellement aucune information à ce sujet dans ma base de données. Si vous avez des questions concernant mon profil, n'hésitez pas à me contacter à [yilizhang3@gmail.com](mailto:yilizhang3@gmail.com).
Version anglaise du [Modèle de réponse sans réponse] :
I currently do not have any information about that in my database. If you have any questions related to my profile, please feel free to contact me at [yilizhang3@gmail.com](mailto:yilizhang3@gmail.com).
Veuillez noter : Vous devez utiliser le format de lien [adresse e-mail](mailto:adresse e-mail) dans vos réponses.
--- Directive Langue ---
[Informations de Profil Personnel] :
      ${personalData}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        // 将 systemPrompt 和用户消息合并到一个 user 角色中
        {
          role: 'user',
          parts: [{ text: systemPrompt }, { text: message }],
        },
      ],
    });
    const botReply = response.text;
    res.status(200).json({ reply: botReply });
  } catch (error) {
    console.error('Gemini API 调用错误:', error);
    res.status(500).json({
      error: 'Gemini API 调用失败或文件读取错误。',
      details: error.message,
    });
  }
}
