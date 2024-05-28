"use client";

import { getAllStickers, postPayPix } from "@/api/get-fetch";
import { loadMercadoPago } from "@mercadopago/sdk-js";
import { Payment, MercadoPagoConfig } from "mercadopago";

export default function Home() {
  const client = new MercadoPagoConfig({
    accessToken:
      "TEST-3852797968096937-112218-beb395f3f0922c1afe007b17ce8f3b32-219656106",
  });
  const payment = new Payment(client);

  const apiPayPix = async () => {
    try {
      const data = await postPayPix();

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const apiGetStickers = async () => {
    payment
      .create({
        body: {
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
        },
        // requestOptions: { idempotencyKey: "<SOME_UNIQUE_VALUE>" },s
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button onClick={() => apiPayPix()}>apiPayPix</button>
      <button onClick={() => apiGetStickers()}>apiGetStickers</button>

      <form id="form-checkout" action="/process_payment" method="post">
        <div>
          <div>
            <label>Nome</label>
            <input
              id="form-checkout__payerFirstName"
              name="payerFirstName"
              type="text"
            />
          </div>
          <div>
            <label>Sobrenome</label>
            <input
              id="form-checkout__payerLastName"
              name="payerLastName"
              type="text"
            />
          </div>
          <div>
            <label>E-mail</label>
            <input id="form-checkout__email" name="email" type="text" />
          </div>
          <div>
            <label>Tipo de documento</label>
            <select
              id="form-checkout__identificationType"
              name="identificationType"
              type="text"
            ></select>
          </div>
          <div>
            <label>Número do documento</label>
            <input
              id="form-checkout__identificationNumber"
              name="identificationNumber"
              type="text"
            />
          </div>
        </div>

        <div>
          <div>
            <input
              type="hidden"
              name="transactionAmount"
              id="transactionAmount"
              value="100"
            />
            <input
              type="hidden"
              name="description"
              id="description"
              value="Nome do Produto"
            />
            <button type="submit">Pagar</button>
          </div>
        </div>
      </form>
    </main>
  );
}
