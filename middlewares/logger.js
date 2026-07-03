// Middleware de log — registra cada requisição no terminal
export default function logger(req, res, next) {
  const inicio = Date.now();
  const metodo = req.method;
  const url = req.originalUrl;
  res.on("finish", () => {
    const duracao = Date.now() - inicio;
    const status = res.statusCode;
    console.log(
      `[${new Date().toISOString()}] ${metodo} ${url} ${status} - ${duracao}ms`
    );
  });

  next();                                    // passa para o próximo middleware/rota
}
