export default (pokemon,quantity)=>{
    const pagarmeBody = {
        uri: 'https://api.pagar.me/1/transactions',
        method: 'POST',
        json: {
            customer: {
            "external_id": "59f0db66d6f399726a528866",
            "name": "Carlos José Leonel Júnior",
            "type": "individual",
            "country": "br",
            "email": "carlosjsl95@gmail.com",
            "documents": [
                {
                "type": "cpf",
                "number": "07469212418"
                }
            ],
            "phone_numbers": ["+84999248786"],
            "birthday": "1995-12-24"
            },
            api_key: "ak_test_IRdP91RjYPefGTRt89fMKESAt8Zwss",
            card_number: "4024007138010896",
            card_expiration_date: "1050",
            card_holder_name: "Ash Ketchum",
            card_cvv: "123",
            amount: pokemon.price * quantity * 100,
            billing: {
                name: "Carlos José Leonel Júnior",
                address: {
                country: "br",
                state: "RN",
                city: "Natal",
                neighborhood: "Cidade da Esperança",
                street: "Rua Mamanguape",
                street_number: "54",
                zipcode: "03424030"
                },
            },
            items: [
            {
                "id": "b123",
                "title": "'pokemon",
                "unit_price": 30000,
                "quantity": 3,
                "tangible": true	
            }
            ]
        }
    }
    return pagarmeBody
}