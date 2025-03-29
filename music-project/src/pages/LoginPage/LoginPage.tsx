import { useNavigate } from "react-router-dom";
import { Title } from "../../components/UI/Title/Title";
import { SLoginPage } from "./LoginPage.style";
import * as yup from "yup";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface IloginForm {
  userEmail: string;
  userPassword: string;
}

const loginScheme = yup.object({
  userEmail: yup
    .string()
    .email("Введите корректно почту")
    .required("Обязательное поле"),
  userPassword: yup
    .string()
    .min(5, "Минимум 5 цифр!")
    .required("Обязательное поле"),
});

export const LoginPage = () => {
  const navigate = useNavigate();
  const [isDisabled, setIsDisabled] = useState(true);
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IloginForm>({
    resolver: yupResolver(loginScheme),
  });

  const onSubmit = (data: IloginForm) => {
    const userData = JSON.parse(localStorage.getItem("userData") || "{}");
    localStorage.setItem("userData", JSON.stringify({ ...userData, ...data }));
    navigate("/main-page");
  };

  useEffect(() => {
    if (userEmail && userPassword) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [userEmail, userPassword]);

  return (
    <SLoginPage>
      <Title titleText="Sign In" titleType="h1" />
      
      <div className="links">
        <a href="#" className="link facebook">
          <img src="" alt="" />
          Sign in with Facebook
        </a>
        <a href="#" className="link twitter">
          <img src="" alt="" />
          Sign in with Twitter
        </a>
        <a href="#" className="link google">
          <img src="" alt="" />
          Sign in with Google
        </a>
      </div>

      <form action="#" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Login or email
          <input 
            type="text" 
            {...register("userEmail")} 
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <p>{errors.userEmail?.message}</p>
        </label>
        <label>
          Password
          <input 
            type="password" 
            {...register("userPassword")}
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <p>{errors.userPassword?.message}</p>
        </label>
        <button type="submit" disabled={isDisabled}>Login</button>
      </form>
      <p>
        Don't have an account? <a href="#">Sign up here</a>
      </p>
    </SLoginPage>
  );
};

