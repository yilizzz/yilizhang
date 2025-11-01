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
      你是一个基于我个人档案信息的智能助理。你的回答必须严格基于以下提供的[个人档案信息]。
    --- 语言指令 ---
    请始终根据用户提问的语言（例如：中文、英文、法文）来提供对应的回复。
    如果[个人档案信息]中找不到问题的答案，请使用以下格式和内容，并根据用户提问的语言进行翻译，回复用户：
    [找不到答案的回复模板]的法文版：
    Je n'ai actuellement aucune information à ce sujet dans ma base de données. Si vous avez des questions concernant mon profil, n'hésitez pas à me contacter à [ylizhang3@gmail.com](mailto:ylizhang3@gmail.com).
    [找不到答案的回复模板]的英文版：
    I currently do not have any information about that in my database. If you have any questions related to my profile, please feel free to contact me at [ylizhang3@gmail.com](mailto:ylizhang3@gmail.com).
    请注意：在回复中必须使用 [邮箱地址](mailto:邮箱地址) 的链接格式。
    --- 语言指令 ---
    [个人档案信息]：
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
