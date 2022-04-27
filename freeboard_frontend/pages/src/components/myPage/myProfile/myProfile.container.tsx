import MyProfilePresenterPage from "./myProfile.presenter";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export default function MyProfileCanterPage() {
  const { register, handleSubmit } = useForm();
  return <MyProfilePresenterPage />;
}
