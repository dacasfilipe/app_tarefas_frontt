import { useForm } from "react-hook-form";
import { api } from "../config_axios";
import { useState } from "react";

const Cadastrar_Usuario = () => {
  const { register, handleSubmit,reset } = useForm();
  const [aviso, setAviso] = useState("");

  const salvar = async (campos) => {
    try { //verificar no controller http://localhost:8080/usuarios
      const response = await api.post("/usuarios", campos);
      setAviso(`Usuário cadastrado com sucesso!"`);
      reset();
    } catch (error) {
      setAviso("Erro ao cadastrar usuário!");
    }
  };

  return (
    <div className="container-fluid bg-dark text-light min-vh-100 d-flex align-items-center">
      <div className="container p-5 bg-light text-dark rounded">
        <h4 className="fst-italic mb-3">Cadastrar Usuário</h4>
        <form onSubmit={handleSubmit(salvar)}>
          <div className="form-group">
            <label htmlFor="usuario_nome">Nome</label>
            <input
              type="text"
              className="form-control"
              id="usuario_nome"
              required
              autoFocus
              {...register("usuario_nome")}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="usuario_email">Email</label>
            <input
              type="email"
              className="form-control"
              id="usuario_email"
              required
              {...register("usuario_email")}
            />
          </div>
          <div className="form-group mt-2">
            <label htmlFor="usuario_senha">Senha:</label>
            <input
              type="password"
              className="form-control"
              id="usuario_senha"
              required
              {...register("usuario_senha")}
            />
          </div>
                   
          <input
            type="submit"
            className="btn btn-primary mt-3"
            value="Enviar"
          />
          <input
            type="reset"
            className="btn btn-danger mt-3 ms-3"
            value="Limpar"
          />
        </form>
        <div className="alert mt-3">{aviso}</div>
      </div>
    </div>
  );
};

export default Cadastrar_Usuario;
