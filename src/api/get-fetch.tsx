export interface InputRequestInfo {
  input: string;
  isBackwards: boolean;
}

export async function getAllStickers<T = unknown>() {
  const reponse = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL_ALL_STICKERS}`
  );

  const result = await reponse.json();

  return result as T;
}

export async function postPayPix<T = unknown>() {
  const body = JSON.stringify({
    transaction_amount: 11.9,
    description: "Produto teste de desenvolvimento",
    payment_method_id: "pix",
    payer: {
      email: "gleyson.emilio@hotmail.com",
      first_name: "Gleydson",
      last_name: "Clemente",
      identification: {
        type: "CPF",
        number: "72361276046",
      },
    },
    notification_url: "https://eo2j1jqg2vau38d.m.pipedream.net",
    external_reference: "72361276046",
  });

  const reponse = await fetch("https://api.mercadopago.com/v1/payments", {
    method: "POST",
    body: body,
    mode: "no-cors",
    headers: {
      Authorization: `Bearer TEST-3852797968096937-112218-beb395f3f0922c1afe007b17ce8f3b32-219656106`,
    },
  });

  const result = await reponse.json();

  return result as T;
}
