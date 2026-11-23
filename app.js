function fatorial(n) {
  let total = 1;
  for (let i = 2; i <= n; i++)total*=i;
  return total
}
function fibonacci(n) {
  let a = 0,
  b = 1;
  for (let i = 0; i<n; i++) {
    [a,
    b] = [b,
    a + b]
  }
  return a
}
document.querySelector("#formulario").addEventListener("submit",
e => {
  e.preventDefault();
  const op = document.querySelector("#operacao").value,
  a = Number(document.querySelector("#a").value),
  b = Number(document.querySelector("#b").value),
  r = document.querySelector("#resultado");
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    r.textContent = "Informe números válidos.";
    return
  }
  if (["fatorial",
  "fibonacci"].includes(op) && (a<0 || a>170 || !Number.isInteger(a)) || op === "fibonacci" && (a>78)) {
    r.textContent = "Use um inteiro não negativo dentro de um limite seguro para esta operação.";
    return
  }
  if (op === "potencia" && (!Number.isInteger(b) || Math.abs(b)>20)) {
    r.textContent = "O expoente deve ser inteiro entre -20 e 20.";
    return
  }
  const valor = op === "somar"?a + b:op === "multiplicar"?a * b:op === "potencia"?a**b:op === "fatorial"?fatorial(a):fibonacci(a);
  r.textContent = `Resultado: ${valor}`
});
document.querySelector("#formulario").requestSubmit()



