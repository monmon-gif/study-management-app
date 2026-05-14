"use client";

import { useState } from "react";

export default function RegisterPage() {

  // 管理者パスワード
  const ADMIN_PASS = "amon0414";

  const [adminPass, setAdminPass] = useState("");
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "USER",
  });

  const canSelectAdmin = adminPass === ADMIN_PASS;

  // 入力変更
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // 管理者パスワード変更
  const handleAdminPassChange = (e) => {
    const value = e.target.value;

    setAdminPass(value);

    // 管理者パスワードが違う場合はUSERへ戻す
    if (value !== ADMIN_PASS && formData.role === "ADMIN") {
      setFormData((prevData) => ({
        ...prevData,
        role: "USER",
      }));
    }
  };

  // 登録処理
  const register = async (e) => {
    e.preventDefault();

    try {

      const res = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("status:", res.status);

      const data = await res.json();

      console.log(data);

      // 登録成功後
      if (res.ok) {
        alert("登録成功");

        // ログイン画面へ移動
        window.location.href = "/login";
      }

    } catch (err) {

      console.error("登録API通信エラー:", err);

      alert("登録失敗");
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">

      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        <h1 className="mb-8 text-center text-3xl font-bold text-gray-800">
          新規登録
        </h1>

        <form
          onSubmit={register}
          className="space-y-5"
        >

          {/* ユーザー名 */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              ユーザー名
            </label>

            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* メール */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              メールアドレス
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* パスワード */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              パスワード
            </label>

            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* 管理者パスワード */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              管理者パスワード
            </label>

            <input
              type="password"
              value={adminPass}
              onChange={handleAdminPassChange}
              placeholder="管理者の場合のみ入力"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
            />
          </div>

          {/* ロール */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              ロール
            </label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500"
            >
              <option value="USER">利用者</option>

              <option
                value="ADMIN"
                disabled={!canSelectAdmin}
              >
                管理者
              </option>
            </select>
          </div>

          {/* 登録ボタン */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition hover:bg-blue-700 active:bg-blue-900"
          >
            登録
          </button>

        </form>

        {/* ログイン画面 */}
        <div className="mt-6 text-center">

          <p className="mb-3 text-sm text-gray-500">
            すでにアカウントをお持ちの方
          </p>

          <a
            href="/login"
            className="inline-block rounded-lg border border-gray-300 px-5 py-2 font-medium text-gray-700 transition hover:bg-gray-100"
          >
            ログインへ
          </a>

        </div>

      </div>

    </main>
  );
}