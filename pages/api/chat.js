import * as fs from "fs/promises";
import * as path from "path";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});
const DATA_FILE_PATH = path.join(process.cwd(), "data", "personal_data.txt");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "缺少消息内容" });
  }

  try {
    const personalData = await fs.readFile(DATA_FILE_PATH, "utf-8");
    const systemPrompt = `
      你是一个基于我个人档案信息的智能助理。
      你的回答必须严格基于以下提供的[个人档案信息]。

      --- 语言指令 ---
      请始终根据用户提问的语言（例如：中文、英文、法文）来提供对应的回复。
      **如果用户提问的语言非中文，请你先将[个人档案信息]中的相关内容翻译成提问语言，然后再回答问题。**
      如果信息中找不到问题的答案，请礼貌地说明“我目前的信息库中没有关于这方面的内容”，并使用用户提问的语言。
      --- 语言指令 ---

      [个人档案信息]：
      ${personalData}
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: [
        // 将 systemPrompt 和用户消息合并到一个 user 角色中
        {
          role: "user",
          parts: [{ text: systemPrompt }, { text: message }],
        },
      ],
    });
    const botReply = response.text;
    res.status(200).json({ reply: botReply });
  } catch (error) {
    console.error("Gemini API 调用错误:", error);
    res.status(500).json({
      error: "Gemini API 调用失败或文件读取错误。",
      details: error.message,
    });
  }
}
