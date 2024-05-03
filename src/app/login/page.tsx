import { loginAction } from "../../actions/auth";
import { Form } from "../../components/Form";
import { Submit } from "../../components/Submit";

function LoginPage() {
  return (
    <div className="m-2">
      <div className="bg-white p-8 rounded shadow w-96">
        <h2 className="text-2xl mb-4 text-black">Login</h2>
        <Form action={loginAction}>
          <div>
            <label htmlFor="email" className="block text-sm text-gray-600">
              Usuário
            </label>
            <input
              type="text"
              name="username"
              className="w-full border border-gray-300 rounded p-2 mt-1 text-black"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm text-gray-600 mt-4"
            >
              Senha
            </label>
            <input
              type="password"
              name="password"
              className="w-full border border-gray-300 rounded p-2 mt-1 text-black"
            />
          </div>
          <div>
            <Submit
              type="submit"
              className="bg-blue-500 text-white w-full rounded p-2 mt-4"
            >
              Entrar
            </Submit>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default LoginPage;
