"use client";

import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";

export default function LoginPage() {
  const { getCount } = useAuth();
  const [checked, setChecked] = useState(false)
  function handleCheckboxChange() {
    setChecked(!checked);
  }
  return (
    <div className="login-page">
      <div className="login-form">
        {/* Login form will go here */}
        <div className="login-logo">
          <h1>Relatos de Papel</h1>
        </div>
        <div className="login-inputs">
          <div className="login-inputs_titulo">
            <p>Iniciar Seccion</p>
          </div>
          <Input label="Username" placeholder="Ingrese correo electronico" />
          <Input label="Password" type="password" placeholder="*****" />
          
        </div>
        <div className="login-inputs_forgot-password">
            <Checkbox
              label="Recordarme"
              checked={checked}
              onChange={handleCheckboxChange}
            />
            <a href="#">¿Olvidaste tu contraseña?</a>
          </div>
        <div className="login-buttons">
          <Button label="Iniciar Sección" />
          <Button label="Registrarse" />
        </div>
      </div>
    </div>
  );
}
