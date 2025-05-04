"use client"

import type React from "react"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "一般的な問い合わせ",
    message: "",
  })

  const [formStatus, setFormStatus] = useState<{
    submitted: boolean
    success: boolean
    message: string
  }>({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // バリデーション
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "すべての必須項目を入力してください。",
      })
      return
    }

    // メール形式チェック
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        submitted: true,
        success: false,
        message: "有効なメールアドレスを入力してください。",
      })
      return
    }

    // 送信成功（実際はここでAPIを呼び出す）
    setFormStatus({
      submitted: true,
      success: true,
      message: "お問い合わせありがとうございます。近日中にご連絡いたします。",
    })

    // フォームをリセット
    setFormData({
      name: "",
      email: "",
      subject: "一般的な問い合わせ",
      message: "",
    })
  }

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "一般的な問い合わせ",
      message: "",
    })
    setFormStatus({
      submitted: false,
      success: false,
      message: "",
    })
  }

  return (
    <div className="p-4 bg-gray-200">
      <h2 className="text-lg font-bold mb-4">宮田マイケルへの質問募集しています</h2>

      {formStatus.submitted && formStatus.success ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
          {formStatus.message}
        </div>
      ) : formStatus.submitted ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">{formStatus.message}</div>
      ) : null}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-[120px,1fr] items-center">
          <label htmlFor="name" className="font-bold">
            お名前: <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-2 border-gray-400 bg-white px-2 py-1 w-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)]"
          />
        </div>

        <div className="grid grid-cols-[120px,1fr] items-center">
          <label htmlFor="email" className="font-bold">
            メールアドレス: <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 border-gray-400 bg-white px-2 py-1 w-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)]"
          />
        </div>

        <div className="grid grid-cols-[120px,1fr] items-center">
          <label htmlFor="subject" className="font-bold">
            件名:
          </label>
          <select
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="border-2 border-gray-400 bg-white px-2 py-1 w-full"
          >
            <option value="一般的な問い合わせ">一般的な問い合わせ</option>
            <option value="宮田マイケルへの質問">宮田マイケルへの質問</option>
            <option value="技術的な問題">技術的な問題</option>
            <option value="その他">その他</option>
          </select>
        </div>

        <div className="grid grid-cols-[120px,1fr] items-start">
          <label htmlFor="message" className="font-bold pt-1">
            メッセージ: <span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            className="border-2 border-gray-400 bg-white px-2 py-1 w-full shadow-[inset_1px_1px_2px_rgba(0,0,0,0.3)]"
          ></textarea>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-1 bg-gray-300 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-500 active:border-t-2 active:border-l-2 active:border-gray-500 active:border-b-2 active:border-r-2 active:border-white"
          >
            リセット
          </button>
          <button
            type="submit"
            className="px-4 py-1 bg-gray-300 border-t-2 border-l-2 border-white border-b-2 border-r-2 border-gray-500 active:border-t-2 active:border-l-2 active:border-gray-500 active:border-b-2 active:border-r-2 active:border-white"
          >
            送信
          </button>
        </div>
      </form>

      <div className="mt-6 text-xs text-gray-600">
        <p>
          ※ 必須項目は<span className="text-red-600">*</span>で示されています。
        </p>
        <p>※ お問い合わせ内容によっては、返信にお時間をいただく場合がございます。</p>
      </div>
    </div>
  )
}
