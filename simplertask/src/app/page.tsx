"use client";
import Image from "next/image";
import React, { useState } from "react";
import UserCard from "../components/UserCard";

interface FormState {
  fullName: string;
  email: string;
  password: string;
}
interface FormErrors {
  fullName?: string;
  email?: string;
  password?: string;
}

export default function Home() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!form.fullName.trim()) newErrors.fullName = "Full Name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) newErrors.email = "Invalid email.";
    if (!form.password) newErrors.password = "Password is required.";
    else if (form.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <main style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", background: "#f9f9f9" }}>
      {/* Navbar placeholder */}
      <div style={{ width: "100%", marginBottom: 32 }}>{/* <Navbar /> will go here */}</div>
      <section style={{ background: "#fff", padding: 32, borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.07)", minWidth: 320, maxWidth: 360 }}>
        <h2 style={{ marginBottom: 24, textAlign: "center",color:"black"}}>Sign Up</h2>
        {submitted ? (
          <div style={{ color: "green", textAlign: "center"}}>Sign up successful!</div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ marginBottom: 16 }}>
              <label htmlFor="fullName" style={{ display: "block", marginBottom: 4 ,color:"black"}}>Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={form.fullName}
                onChange={handleChange}
                style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" ,color:"black" ,backgroundColor:"white"}}
              />
              {errors.fullName && <div style={{ color: "red", fontSize: 12 }}>{errors.fullName}</div>}
            </div>
            <div style={{ marginBottom: 16 }}>
              <label htmlFor="email" style={{ display: "block", marginBottom: 4 ,color:"black" ,backgroundColor:"white"}}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" ,color:"black" ,backgroundColor:"white"}}
              />
              {errors.email && <div style={{ color: "red", fontSize: 12 }}>{errors.email}</div>}
            </div>
            <div style={{ marginBottom: 20 }}>
              <label htmlFor="password" style={{ display: "block", marginBottom: 4 ,color:"black" ,backgroundColor:"white"}}>Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                style={{ width: "100%", padding: 8, borderRadius: 4, border: "1px solid #ccc" ,color:"black" ,backgroundColor:"white"}}
              />
              {errors.password && <div style={{ color: "red", fontSize: 12 }}>{errors.password}</div>}
            </div>
            <button type="submit" style={{ width: "100%", padding: 10, borderRadius: 4, background: "#0070f3", color: "#fff", border: "none", fontWeight: 600, cursor: "pointer" }}>
              Sign Up
            </button>
          </form>
        )}
      </section>
      {/* UserCard placeholder */}
      <div style={{ marginTop: 40,color:"black"}}>
        <UserCard name={form.fullName || "Sumit prajapati"} email={form.email || "sumit@gmail.com"} />
      </div>
    </main>
  );
}
