const express = require('express');
const app = express();
const port = 3030;

app.get('/', (req, res) => {
  res.json({
    "site_id": "MLB",
    "country_default_time_zone": "GMT-03:00",
    "query": "eletronicos",
    "paging": {
        "total": 2582943,
        "primary_results": 1000,
        "offset": 0,
        "limit": 1
    },
    "results": [
        {
            "id": "MLB2769050397",
            "title": "Fone Bluetooth Premium Compatível Air Pods 3º Geração Sumexr",
            "condition": "new",
            "thumbnail_id": "826677-MLB51244072964_082022",
            "catalog_product_id": "MLB19748097",
            "listing_type_id": "gold_special",
            "permalink": "https://produto.mercadolivre.com.br/MLB-2769050397-fone-bluetooth-premium-compativel-air-pods-3-geraco-sumexr-_JM",
            "buying_mode": "buy_it_now",
            "site_id": "MLB",
            "category_id": "MLB7457",
            "domain_id": "MLB-HEADPHONES",
            "thumbnail": "http://http2.mlstatic.com/D_826677-MLB51244072964_082022-I.jpg",
            "currency_id": "BRL",
            "order_backend": 1,
            "price": 99,
            "original_price": null,
            "sale_price": null,
            "sold_quantity": 250,
            "available_quantity": 1,
            "official_store_id": null,
            "use_thumbnail_id": true,
            "accepts_mercadopago": true,
            "tags": [
                "good_quality_thumbnail",
                "extended_warranty_eligible",
                "good_quality_picture",
                "immediate_payment",
                "cart_eligible",
                "best_seller_candidate",
                "shipping_guaranteed"
            ],
            "variation_filters": [
                "COLOR"
            ],
            "shipping": {
                "store_pick_up": false,
                "free_shipping": true,
                "logistic_type": "fulfillment",
                "mode": "me2",
                "tags": [
                    "fulfillment",
                    "self_service_out",
                    "mandatory_free_shipping"
                ],
                "promise": null
            },
            "stop_time": "2043-05-23T18:01:16.000Z",
            "seller": {
                "id": 288953550,
                "nickname": "FCAGROUP",
                "car_dealer": false,
                "real_estate_agency": false,
                "_": false,
                "registration_date": "2017-12-06T14:43:47.000-04:00",
                "tags": [
                    "normal",
                    "eshop",
                    "mshops",
                    "credits_profile",
                    "messages_as_seller"
                ],
                "car_dealer_logo": "",
                "permalink": "http://perfil.mercadolivre.com.br/FCAGROUP",
                "seller_reputation": {
                    "level_id": "5_green",
                    "power_seller_status": "gold",
                    "transactions": {
                        "canceled": 372,
                        "completed": 4702,
                        "period": "historic",
                        "ratings": {
                            "negative": 0.1,
                            "neutral": 0.02,
                            "positive": 0.88
                        },
                        "total": 5074
                    },
                    "metrics": {
                        "sales": {
                            "period": "60 days",
                            "completed": 1693
                        },
                        "claims": {
                            "period": "60 days",
                            "rate": 0.0005,
                            "value": 1
                        },
                        "delayed_handling_time": {
                            "period": "60 days",
                            "rate": 0,
                            "value": 0
                        },
                        "cancellations": {
                            "period": "60 days",
                            "rate": 0,
                            "value": 0
                        }
                    }
                },
                "eshop": {
                    "eshop_id": 491238,
                    "seller": 288953550,
                    "nick_name": "FCAGROUP",
                    "eshop_status_id": 1,
                    "site_id": "MLB",
                    "eshop_experience": 0,
                    "eshop_rubro": null,
                    "eshop_locations": [],
                    "eshop_logo_url": "http://http2.mlstatic.com/eshops-logo/logo-288953550-1650815858133.jpeg"
                }
            },
            "seller_address": {
                "comment": "",
                "address_line": "",
                "id": null,
                "latitude": null,
                "longitude": null,
                "country": {
                    "id": "BR",
                    "name": "Brasil"
                },
                "state": {
                    "id": "BR-SP",
                    "name": "São Paulo"
                },
                "city": {
                    "id": "BR-SP-44",
                    "name": "São Paulo"
                }
            },
            "address": {
                "state_id": "BR-SP",
                "state_name": "São Paulo",
                "city_id": "BR-SP-44",
                "city_name": "São Paulo"
            },
            "attributes": [
                {
                    "id": "ALPHANUMERIC_MODEL",
                    "name": "Modelo alfanumérico",
                    "value_id": "13413156",
                    "value_name": "Aux",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Outros",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "13413156",
                            "name": "Aux",
                            "struct": null,
                            "source": 3942444344910321
                        }
                    ],
                    "source": 3942444344910321,
                    "value_type": "string"
                },
                {
                    "id": "BRAND",
                    "name": "Marca",
                    "value_id": "5885860",
                    "value_name": "Sumexr",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Outros",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "5885860",
                            "name": "Sumexr",
                            "struct": null,
                            "source": 3045741222775799
                        }
                    ],
                    "source": 3045741222775799,
                    "value_type": "string"
                },
                {
                    "id": "ITEM_CONDITION",
                    "name": "Condição do item",
                    "value_id": "2230284",
                    "value_name": "Novo",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Outros",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "2230284",
                            "name": "Novo",
                            "struct": null,
                            "source": 3045741222775799
                        }
                    ],
                    "source": 3045741222775799,
                    "value_type": "list"
                },
                {
                    "id": "LINE",
                    "name": "Linha",
                    "value_id": "12012316",
                    "value_name": "Headset",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Outros",
                    "value_struct": null,
                    "values": [
                        {
                            "id": "12012316",
                            "name": "Headset",
                            "struct": null,
                            "source": 3942444344910321
                        }
                    ],
                    "source": 3942444344910321,
                    "value_type": "string"
                },
                {
                    "id": "MODEL",
                    "name": "Modelo",
                    "value_id": null,
                    "value_name": "Celular, Academia, Android, IOS, Áudio, Corrida, Aminhada, Confortavel, Barato, Bluetooth, Caminhada, Corrida, Eletrônicos, Esportes, Fone, Fone De Ouvido, Garantia, Infantil, Intra Auricular, Ios, Lightning, Maça, Sem Fio,Branco, Black, Gamer, Microfone,",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Outros",
                    "value_struct": null,
                    "values": [
                        {
                            "id": null,
                            "name": "Celular, Academia, Android, IOS, Áudio, Corrida, Aminhada, Confortavel, Barato, Bluetooth, Caminhada, Corrida, Eletrônicos, Esportes, Fone, Fone De Ouvido, Garantia, Infantil, Intra Auricular, Ios, Lightning, Maça, Sem Fio,Branco, Black, Gamer, Microfone,",
                            "struct": null,
                            "source": 3376461333454861
                        }
                    ],
                    "source": 3376461333454861,
                    "value_type": "string"
                },
                {
                    "id": "UNITS_PER_PACKAGE",
                    "name": "Unidades por embalagem",
                    "value_id": null,
                    "value_name": "1",
                    "attribute_group_id": "OTHERS",
                    "attribute_group_name": "Outros",
                    "value_struct": null,
                    "values": [
                        {
                            "id": null,
                            "name": "1",
                            "struct": null,
                            "source": 3376461333454861
                        }
                    ],
                    "source": 3376461333454861,
                    "value_type": "number"
                }
            ],
            "variations_data": {
                "175091449366": {
                    "thumbnail": "http://http2.mlstatic.com/D_826677-MLB51244072964_082022-O.jpg",
                    "ratio": "0.77",
                    "name": "Branco",
                    "pictures_qty": 3,
                    "inventory_id": "PEGA26588"
                }
            },
            "installments": {
                "quantity": 12,
                "amount": 9.62,
                "rate": 16.64,
                "currency_id": "BRL"
            },
            "winner_item_id": null,
            "discounts": null,
            "promotions": [],
            "inventory_id": null
        }
    ],
    "sort": {
        "id": "relevance",
        "name": "Mais relevantes"
    },
    "available_sorts": [
        {
            "id": "price_asc",
            "name": "Menor preço"
        },
        {
            "id": "price_desc",
            "name": "Maior preço"
        }
    ],
    "filters": [],
    "available_filters": [
        {
            "id": "official_store",
            "name": "Lojas oficiais",
            "type": "text",
            "values": [
                {
                    "id": "all",
                    "name": "Todas as Lojas oficiais",
                    "results": 274773
                },
                {
                    "id": "5535",
                    "name": "WPE Eletronicos",
                    "results": 22345
                },
                {
                    "id": "5370",
                    "name": "Helplo",
                    "results": 10125
                },
                {
                    "id": "4734",
                    "name": "Elgin",
                    "results": 3142
                },
                {
                    "id": "5102",
                    "name": "Rmaistech",
                    "results": 3142
                },
                {
                    "id": "5106",
                    "name": "PCI Eletro",
                    "results": 3142
                },
                {
                    "id": "5541",
                    "name": "Azzax",
                    "results": 3142
                },
                {
                    "id": "2707",
                    "name": "Mercado Livre",
                    "results": 1745
                },
                {
                    "id": "3965",
                    "name": "Buy N Pay",
                    "results": 349
                },
                {
                    "id": "4457",
                    "name": "Polibrinq",
                    "results": 349
                },
                {
                    "id": "50074",
                    "name": "Lorben",
                    "results": 349
                },
                {
                    "id": "5126",
                    "name": "Tork Tools",
                    "results": 349
                },
                {
                    "id": "5547",
                    "name": "Ninja Parts SC",
                    "results": 349
                }
            ]
        },
        {
            "id": "discount",
            "name": "Descontos",
            "type": "number",
            "values": [
                {
                    "id": "5-100",
                    "name": "Mais de 5% OFF",
                    "results": 575383
                },
                {
                    "id": "10-100",
                    "name": "Mais de 10% OFF",
                    "results": 362408
                },
                {
                    "id": "15-100",
                    "name": "Mais de 15% OFF",
                    "results": 85539
                },
                {
                    "id": "20-100",
                    "name": "Mais de 20% OFF",
                    "results": 57957
                },
                {
                    "id": "25-100",
                    "name": "Mais de 25% OFF",
                    "results": 34914
                },
                {
                    "id": "30-100",
                    "name": "Mais de 30% OFF",
                    "results": 28978
                },
                {
                    "id": "40-100",
                    "name": "Mais de 40% OFF",
                    "results": 13267
                },
                {
                    "id": "50-100",
                    "name": "Mais de 50% OFF",
                    "results": 7331
                },
                {
                    "id": "60-100",
                    "name": "Mais de 60% OFF",
                    "results": 4189
                }
            ]
        },
        {
            "id": "price",
            "name": "Preço",
            "type": "range",
            "values": [
                {
                    "id": "*-40.0",
                    "name": "Até R$ 40",
                    "results": 841778
                },
                {
                    "id": "40.0-100.0",
                    "name": "R$40 a R$100",
                    "results": 616233
                },
                {
                    "id": "100.0-*",
                    "name": "Mais de R$100",
                    "results": 1124233
                }
            ]
        },
        {
            "id": "accepts_mercadopago",
            "name": "Filtro por MercadoPago",
            "type": "boolean",
            "values": [
                {
                    "id": "yes",
                    "name": "Com Mercado Pago",
                    "results": 2582244
                }
            ]
        },
        {
            "id": "installments",
            "name": "Pagamento",
            "type": "text",
            "values": [
                {
                    "id": "yes",
                    "name": "Pagamento parcelado",
                    "results": 2580848
                },
                {
                    "id": "no_interest",
                    "name": "Sem juros",
                    "results": 1080241
                }
            ]
        },
        {
            "id": "shipping",
            "name": "Tipo de envio",
            "type": "text",
            "values": [
                {
                    "id": "mercadoenvios",
                    "name": "Mercado Envios",
                    "results": 2582244
                },
                {
                    "id": "fulfillment",
                    "name": "Full",
                    "results": 645561
                }
            ]
        },
        {
            "id": "power_seller",
            "name": "Filtro MercadoLíderes",
            "type": "boolean",
            "values": [
                {
                    "id": "yes",
                    "name": "Melhores vendedores",
                    "results": 1954140
                }
            ]
        },
        {
            "id": "since",
            "name": "Filtro por data de início",
            "type": "text",
            "values": [
                {
                    "id": "today",
                    "name": "Anunciados hoje",
                    "results": 1396
                }
            ]
        },
        {
            "id": "has_video",
            "name": "Filtro por publicações com vídeo",
            "type": "boolean",
            "values": [
                {
                    "id": "yes",
                    "name": "Publicações com vídeo",
                    "results": 687108
                }
            ]
        },
        {
            "id": "has_pictures",
            "name": "Filtro por publicação com imagens",
            "type": "boolean",
            "values": [
                {
                    "id": "yes",
                    "name": "Com fotos",
                    "results": 2582244
                }
            ]
        },
        {
            "id": "all_payment_methods_discount",
            "name": "Descuentos para todos los medios de pago",
            "type": "number",
            "values": [
                {
                    "id": "1-100",
                    "name": "Mais de 1% OFF",
                    "results": 251381
                },
                {
                    "id": "5-100",
                    "name": "Mais de 5% OFF",
                    "results": 248588
                },
                {
                    "id": "10-100",
                    "name": "Mais de 10% OFF",
                    "results": 239510
                },
                {
                    "id": "15-100",
                    "name": "Mais de 15% OFF",
                    "results": 13965
                },
                {
                    "id": "20-100",
                    "name": "Mais de 20% OFF",
                    "results": 11172
                },
                {
                    "id": "25-100",
                    "name": "Mais de 25% OFF",
                    "results": 6982
                },
                {
                    "id": "30-100",
                    "name": "Mais de 30% OFF",
                    "results": 5586
                }
            ]
        },
        {
            "id": "price_campaign_id",
            "name": "Campanha",
            "type": "number",
            "values": [
                {
                    "id": "MLB18040",
                    "name": "MLB18040",
                    "results": 2793
                },
                {
                    "id": "P-MLB11385002",
                    "name": "P-MLB11385002",
                    "results": 1047
                },
                {
                    "id": "MLB17917",
                    "name": "MLB17917",
                    "results": 1047
                },
                {
                    "id": "P-MLB11331084",
                    "name": "P-MLB11331084",
                    "results": 349
                },
                {
                    "id": "P-MLB11331086",
                    "name": "P-MLB11331086",
                    "results": 349
                },
                {
                    "id": "P-MLB11331074",
                    "name": "P-MLB11331074",
                    "results": 349
                },
                {
                    "id": "P-MLB11393042",
                    "name": "P-MLB11393042",
                    "results": 349
                },
                {
                    "id": "P-MLB11363018",
                    "name": "P-MLB11363018",
                    "results": 349
                }
            ]
        },
        {
            "id": "promotion_type",
            "name": "Tipo de promoção",
            "type": "text",
            "values": [
                {
                    "id": "lightning",
                    "name": "Oferta relâmpago",
                    "results": 1047
                }
            ]
        },
        {
            "id": "shipping_cost",
            "name": "Custo do frete",
            "type": "text",
            "values": [
                {
                    "id": "free",
                    "name": "Gratis",
                    "results": 1222341
                }
            ]
        },
        {
            "id": "category",
            "name": "Categorias",
            "type": "text",
            "values": [
                {
                    "id": "MLB1051",
                    "name": "Celulares e Telefones",
                    "results": 118009
                },
                {
                    "id": "MLB7069",
                    "name": "Segurança para Casa",
                    "results": 358567
                },
                {
                    "id": "MLB6999",
                    "name": "Componentes Eletrônicos",
                    "results": 1147625
                },
                {
                    "id": "MLB4900",
                    "name": "Pilhas e Carregadores",
                    "results": 212626
                },
                {
                    "id": "MLB5726",
                    "name": "Eletrodomésticos",
                    "results": 181553
                },
                {
                    "id": "MLB1500",
                    "name": "Construção",
                    "results": 134419
                },
                {
                    "id": "MLB1132",
                    "name": "Brinquedos e Hobbies",
                    "results": 60052
                },
                {
                    "id": "MLB1648",
                    "name": "Informática",
                    "results": 55862
                },
                {
                    "id": "MLB1621",
                    "name": "Jardim e Ar Livre",
                    "results": 49577
                },
                {
                    "id": "MLB1613",
                    "name": "Banheiros",
                    "results": 49228
                },
                {
                    "id": "MLB264051",
                    "name": "Cuidado da Casa e Lavanderia",
                    "results": 48181
                },
                {
                    "id": "MLB263532",
                    "name": "Ferramentas",
                    "results": 38405
                },
                {
                    "id": "MLB1582",
                    "name": "Iluminação Residencial",
                    "results": 25138
                },
                {
                    "id": "MLB5672",
                    "name": "Acessórios para Veículos",
                    "results": 23741
                },
                {
                    "id": "MLB1499",
                    "name": "Indústria e Comércio",
                    "results": 21297
                },
                {
                    "id": "MLB1246",
                    "name": "Beleza e Cuidado Pessoal",
                    "results": 20948
                },
                {
                    "id": "MLB3835",
                    "name": "Áudio",
                    "results": 19551
                },
                {
                    "id": "MLB1631",
                    "name": "Enfeites e Decoração da Casa",
                    "results": 16758
                },
                {
                    "id": "MLB1618",
                    "name": "Cozinha",
                    "results": 14314
                },
                {
                    "id": "MLB1384",
                    "name": "Bebês",
                    "results": 12918
                },
                {
                    "id": "MLB1182",
                    "name": "Instrumentos Musicais",
                    "results": 11172
                },
                {
                    "id": "MLB264586",
                    "name": "Saúde",
                    "results": 6982
                },
                {
                    "id": "MLB1368",
                    "name": "Arte, Papelaria e Armarinho",
                    "results": 5935
                },
                {
                    "id": "MLB12404",
                    "name": "Festas e Lembrancinhas",
                    "results": 5586
                },
                {
                    "id": "MLB1196",
                    "name": "Livros, Revistas e Comics",
                    "results": 5586
                },
                {
                    "id": "MLB1039",
                    "name": "Câmeras e Acessórios",
                    "results": 4189
                },
                {
                    "id": "MLB4887",
                    "name": "Acessórios para Áudio e Vídeo",
                    "results": 2793
                },
                {
                    "id": "MLB1071",
                    "name": "Animais",
                    "results": 2793
                },
                {
                    "id": "MLB10737",
                    "name": "Cabos",
                    "results": 2793
                },
                {
                    "id": "MLB1276",
                    "name": "Esportes e Fitness",
                    "results": 2793
                },
                {
                    "id": "MLB3937",
                    "name": "Joias e Relógios",
                    "results": 2793
                },
                {
                    "id": "MLB322074",
                    "name": "Peças para TV",
                    "results": 2793
                },
                {
                    "id": "MLB1430",
                    "name": "Calçados, Roupas e Bolsas",
                    "results": 1396
                },
                {
                    "id": "MLB1953",
                    "name": "Mais Categorias",
                    "results": 1396
                },
                {
                    "id": "MLB436246",
                    "name": "Têxteis de Casa e Decoração",
                    "results": 1396
                },
                {
                    "id": "MLB4901",
                    "name": "Outros Eletrônicos",
                    "results": 50276
                }
            ]
        },
        {
            "id": "BRAND",
            "name": "Marca",
            "type": "STRING",
            "values": [
                {
                    "id": "10366",
                    "name": "Intelbras",
                    "results": 225
                },
                {
                    "id": "18538286",
                    "name": "CP Placas Eletrônicas",
                    "results": 117
                },
                {
                    "id": "276243",
                    "name": "Genérica",
                    "results": 99
                },
                {
                    "id": "515753",
                    "name": "PPA",
                    "results": 93
                },
                {
                    "id": "2891253",
                    "name": "AGL",
                    "results": 84
                },
                {
                    "id": "13364506",
                    "name": "ST",
                    "results": 57
                },
                {
                    "id": "348085",
                    "name": "Lorenzetti",
                    "results": 51
                },
                {
                    "id": "2445255",
                    "name": "HDL",
                    "results": 48
                },
                {
                    "id": "188",
                    "name": "Electrolux",
                    "results": 45
                },
                {
                    "id": "9103816",
                    "name": "Importado",
                    "results": 42
                },
                {
                    "id": "3",
                    "name": "Philips",
                    "results": 42
                },
                {
                    "id": "59772",
                    "name": "OEM",
                    "results": 36
                },
                {
                    "id": "515755",
                    "name": "Peccinin",
                    "results": 36
                },
                {
                    "id": "1180961",
                    "name": "WEG",
                    "results": 36
                },
                {
                    "id": "1156686",
                    "name": "Metaltex",
                    "results": 36
                },
                {
                    "id": "8",
                    "name": "Panasonic",
                    "results": 33
                },
                {
                    "id": "7512",
                    "name": "Hydra",
                    "results": 30
                },
                {
                    "id": "4480023",
                    "name": "Digimec",
                    "results": 30
                },
                {
                    "id": "2924359",
                    "name": "MarGirius",
                    "results": 30
                },
                {
                    "id": "2986693",
                    "name": "Garen",
                    "results": 27
                },
                {
                    "id": "2757057",
                    "name": "Rossi",
                    "results": 27
                },
                {
                    "id": "2149465",
                    "name": "Black+Decker",
                    "results": 27
                },
                {
                    "id": "1160873",
                    "name": "Candide",
                    "results": 27
                },
                {
                    "id": "104585",
                    "name": "Makita",
                    "results": 27
                },
                {
                    "id": "2668409",
                    "name": "DNI",
                    "results": 24
                },
                {
                    "id": "102992",
                    "name": "Elgin",
                    "results": 24
                },
                {
                    "id": "6189851",
                    "name": "MCM",
                    "results": 21
                },
                {
                    "id": "5538795",
                    "name": "BAP Energy",
                    "results": 18
                },
                {
                    "id": "4826901",
                    "name": "Fortek",
                    "results": 18
                },
                {
                    "id": "479",
                    "name": "Philco",
                    "results": 18
                },
                {
                    "id": "4522991",
                    "name": "Citex",
                    "results": 18
                },
                {
                    "id": "2997256",
                    "name": "Zagonel",
                    "results": 18
                },
                {
                    "id": "2804265",
                    "name": "SM",
                    "results": 18
                },
                {
                    "id": "2786002",
                    "name": "Original",
                    "results": 18
                },
                {
                    "id": "261196",
                    "name": "RCG",
                    "results": 18
                },
                {
                    "id": "140055",
                    "name": "Knup",
                    "results": 18
                },
                {
                    "id": "139113",
                    "name": "MB",
                    "results": 18
                },
                {
                    "id": "1237593",
                    "name": "Schneider Electric",
                    "results": 18
                },
                {
                    "id": "5333037",
                    "name": "IPEC",
                    "results": 15
                },
                {
                    "id": "4786717",
                    "name": "International Rectifier",
                    "results": 15
                },
                {
                    "id": "428254",
                    "name": "Omron",
                    "results": 15
                },
                {
                    "id": "41446",
                    "name": "Philips Walita",
                    "results": 15
                },
                {
                    "id": "3862964",
                    "name": "GC",
                    "results": 15
                },
                {
                    "id": "2891255",
                    "name": "Amelco",
                    "results": 15
                },
                {
                    "id": "232",
                    "name": "Sanyo",
                    "results": 15
                },
                {
                    "id": "206",
                    "name": "Samsung",
                    "results": 15
                },
                {
                    "id": "2045",
                    "name": "Toshiba",
                    "results": 15
                },
                {
                    "id": "16588712",
                    "name": "Adtek",
                    "results": 15
                },
                {
                    "id": "5885860",
                    "name": "Sumexr",
                    "results": 12
                },
                {
                    "id": "4786709",
                    "name": "Fairchild",
                    "results": 12
                },
                {
                    "id": "471",
                    "name": "Britânia",
                    "results": 12
                },
                {
                    "id": "2891271",
                    "name": "Protection",
                    "results": 12
                },
                {
                    "id": "2856799",
                    "name": "Finder",
                    "results": 12
                },
                {
                    "id": "2642957",
                    "name": "KDT",
                    "results": 12
                },
                {
                    "id": "2286577",
                    "name": "Sonoff",
                    "results": 12
                },
                {
                    "id": "215",
                    "name": "LG",
                    "results": 12
                },
                {
                    "id": "1823",
                    "name": "Epson",
                    "results": 12
                },
                {
                    "id": "15926",
                    "name": "Texas",
                    "results": 12
                },
                {
                    "id": "11565249",
                    "name": "Toaninni",
                    "results": 12
                },
                {
                    "id": "92628",
                    "name": "Colormaq",
                    "results": 9
                },
                {
                    "id": "8566568",
                    "name": "RY",
                    "results": 9
                },
                {
                    "id": "7312371",
                    "name": "ARPE",
                    "results": 9
                },
                {
                    "id": "6852047",
                    "name": "Ya Xun",
                    "results": 9
                },
                {
                    "id": "6618929",
                    "name": "Fonte",
                    "results": 9
                },
                {
                    "id": "5986",
                    "name": "Brother",
                    "results": 9
                },
                {
                    "id": "5719772",
                    "name": "Chipstar",
                    "results": 9
                },
                {
                    "id": "5300257",
                    "name": "ZEM",
                    "results": 9
                },
                {
                    "id": "515754",
                    "name": "SEG",
                    "results": 9
                },
                {
                    "id": "5044670",
                    "name": "MagnaChip",
                    "results": 9
                },
                {
                    "id": "5013108",
                    "name": "Polibrinq",
                    "results": 9
                },
                {
                    "id": "4786739",
                    "name": "STMicroelectronics",
                    "results": 9
                },
                {
                    "id": "45099",
                    "name": "Aquário",
                    "results": 9
                },
                {
                    "id": "4480019",
                    "name": "Coel",
                    "results": 9
                },
                {
                    "id": "432798",
                    "name": "Taschibra",
                    "results": 9
                },
                {
                    "id": "4131280",
                    "name": "Sibratec",
                    "results": 9
                },
                {
                    "id": "403607",
                    "name": "Yale",
                    "results": 9
                },
                {
                    "id": "360",
                    "name": "Consul",
                    "results": 9
                },
                {
                    "id": "3379995",
                    "name": "Retekess",
                    "results": 9
                },
                {
                    "id": "3310998",
                    "name": "CDI",
                    "results": 9
                },
                {
                    "id": "2785980",
                    "name": "Storm",
                    "results": 9
                },
                {
                    "id": "2751633",
                    "name": "Novus",
                    "results": 9
                },
                {
                    "id": "260751",
                    "name": "Inova",
                    "results": 9
                },
                {
                    "id": "2503",
                    "name": "Motorola",
                    "results": 9
                },
                {
                    "id": "2455874",
                    "name": "Thevear",
                    "results": 9
                },
                {
                    "id": "2198047",
                    "name": "Tssaper",
                    "results": 9
                },
                {
                    "id": "189872",
                    "name": "Western",
                    "results": 9
                },
                {
                    "id": "179492",
                    "name": "Infineon",
                    "results": 9
                },
                {
                    "id": "17025092",
                    "name": "Clix",
                    "results": 9
                },
                {
                    "id": "16495498",
                    "name": "NXP",
                    "results": 9
                },
                {
                    "id": "15375",
                    "name": "Energizer",
                    "results": 9
                },
                {
                    "id": "13628330",
                    "name": "ZX",
                    "results": 9
                },
                {
                    "id": "13510600",
                    "name": "Pratimix",
                    "results": 9
                },
                {
                    "id": "13510565",
                    "name": "HS Automação",
                    "results": 9
                },
                {
                    "id": "122707",
                    "name": "ChipSCE",
                    "results": 9
                },
                {
                    "id": "11854809",
                    "name": "Winbond",
                    "results": 9
                },
                {
                    "id": "10852476",
                    "name": "Lider",
                    "results": 9
                },
                {
                    "id": "10486437",
                    "name": "TakTark",
                    "results": 9
                },
                {
                    "id": "1033072",
                    "name": "DeWalt",
                    "results": 9
                },
                {
                    "id": "1032393",
                    "name": "Stella",
                    "results": 9
                },
                {
                    "id": "9838",
                    "name": "Pioneer",
                    "results": 6
                },
                {
                    "id": "7359926",
                    "name": "LOTI",
                    "results": 6
                },
                {
                    "id": "7343037",
                    "name": "Fotek",
                    "results": 6
                },
                {
                    "id": "7312366",
                    "name": "Altronic",
                    "results": 6
                },
                {
                    "id": "7218747",
                    "name": "Control ID",
                    "results": 6
                },
                {
                    "id": "7106798",
                    "name": "Haiz",
                    "results": 6
                },
                {
                    "id": "6662907",
                    "name": "Nehc",
                    "results": 6
                },
                {
                    "id": "6572564",
                    "name": "Hamy",
                    "results": 6
                },
                {
                    "id": "5597293",
                    "name": "Element14",
                    "results": 6
                },
                {
                    "id": "52833",
                    "name": "Energy",
                    "results": 6
                },
                {
                    "id": "5259374",
                    "name": "Top",
                    "results": 6
                },
                {
                    "id": "518717",
                    "name": "JL",
                    "results": 6
                },
                {
                    "id": "5052164",
                    "name": "On Eletrônicos",
                    "results": 6
                },
                {
                    "id": "4946",
                    "name": "Bosch",
                    "results": 6
                },
                {
                    "id": "4849985",
                    "name": "Power Integrations",
                    "results": 6
                },
                {
                    "id": "465019",
                    "name": "Janome",
                    "results": 6
                },
                {
                    "id": "45918",
                    "name": "Elsys",
                    "results": 6
                },
                {
                    "id": "45047",
                    "name": "Speed",
                    "results": 6
                },
                {
                    "id": "41971",
                    "name": "Lenoxx",
                    "results": 6
                },
                {
                    "id": "3994156",
                    "name": "CSB",
                    "results": 6
                },
                {
                    "id": "3994142",
                    "name": "Energy Power",
                    "results": 6
                },
                {
                    "id": "3902970",
                    "name": "Novo",
                    "results": 6
                },
                {
                    "id": "3817468",
                    "name": "ALC",
                    "results": 6
                },
                {
                    "id": "3104350",
                    "name": "Sintex",
                    "results": 6
                },
                {
                    "id": "2924361",
                    "name": "Qualitronix",
                    "results": 6
                },
                {
                    "id": "2833483",
                    "name": "Luatek",
                    "results": 6
                },
                {
                    "id": "2785954",
                    "name": "Lumi",
                    "results": 6
                },
                {
                    "id": "2774317",
                    "name": "Global",
                    "results": 6
                },
                {
                    "id": "2736",
                    "name": "Singer",
                    "results": 6
                },
                {
                    "id": "2705251",
                    "name": "DM Toys",
                    "results": 6
                },
                {
                    "id": "20262",
                    "name": "AOC",
                    "results": 6
                },
                {
                    "id": "195091",
                    "name": "Hikvision",
                    "results": 6
                },
                {
                    "id": "181983",
                    "name": "Leboss",
                    "results": 6
                },
                {
                    "id": "17265",
                    "name": "JBL",
                    "results": 6
                },
                {
                    "id": "168271",
                    "name": "Moura",
                    "results": 6
                },
                {
                    "id": "15877250",
                    "name": "Bbacomercio",
                    "results": 6
                },
                {
                    "id": "15877045",
                    "name": "Will",
                    "results": 6
                },
                {
                    "id": "15722",
                    "name": "Universal",
                    "results": 6
                },
                {
                    "id": "14004570",
                    "name": "Importweb",
                    "results": 6
                },
                {
                    "id": "13853607",
                    "name": "Inpacom",
                    "results": 6
                },
                {
                    "id": "13660729",
                    "name": "Topdata",
                    "results": 6
                },
                {
                    "id": "13553415",
                    "name": "Patola",
                    "results": 6
                },
                {
                    "id": "13510569",
                    "name": "Injetech",
                    "results": 6
                },
                {
                    "id": "13371556",
                    "name": "China",
                    "results": 6
                },
                {
                    "id": "1249447",
                    "name": "Lego",
                    "results": 6
                },
                {
                    "id": "11445804",
                    "name": "MGA Entertainment",
                    "results": 6
                },
                {
                    "id": "11410665",
                    "name": "It-Blue",
                    "results": 6
                },
                {
                    "id": "1119283",
                    "name": "Stam",
                    "results": 6
                },
                {
                    "id": "1062230",
                    "name": "Saft",
                    "results": 6
                },
                {
                    "id": "10447040",
                    "name": "Energy Lux",
                    "results": 6
                },
                {
                    "id": "991600",
                    "name": "Shelter",
                    "results": 3
                },
                {
                    "id": "96393",
                    "name": "Rheem",
                    "results": 3
                },
                {
                    "id": "923427",
                    "name": "Ipega",
                    "results": 3
                },
                {
                    "id": "9217563",
                    "name": "Fun Game",
                    "results": 3
                },
                {
                    "id": "9123208",
                    "name": "SBP",
                    "results": 3
                },
                {
                    "id": "9072398",
                    "name": "Sublimachine",
                    "results": 3
                },
                {
                    "id": "9068846",
                    "name": "Nem Compara",
                    "results": 3
                },
                {
                    "id": "897773",
                    "name": "Rinnai",
                    "results": 3
                },
                {
                    "id": "8911591",
                    "name": "Bring It",
                    "results": 3
                },
                {
                    "id": "8800273",
                    "name": "Ekaza",
                    "results": 3
                },
                {
                    "id": "8726122",
                    "name": "Topen Home",
                    "results": 3
                },
                {
                    "id": "8724156",
                    "name": "Fast",
                    "results": 3
                },
                {
                    "id": "8692",
                    "name": "Revlon",
                    "results": 3
                },
                {
                    "id": "8686867",
                    "name": "Moment",
                    "results": 3
                },
                {
                    "id": "8642181",
                    "name": "TFC",
                    "results": 3
                },
                {
                    "id": "85327",
                    "name": "Fame",
                    "results": 3
                },
                {
                    "id": "83385",
                    "name": "Elephant",
                    "results": 3
                },
                {
                    "id": "8183630",
                    "name": "7evenBrasil",
                    "results": 3
                },
                {
                    "id": "8139908",
                    "name": "Lucky Amazonia",
                    "results": 3
                },
                {
                    "id": "81278",
                    "name": "Amvox",
                    "results": 3
                },
                {
                    "id": "81159",
                    "name": "Venax",
                    "results": 3
                },
                {
                    "id": "8042036",
                    "name": "Lig Light",
                    "results": 3
                },
                {
                    "id": "79956",
                    "name": "Latina",
                    "results": 3
                },
                {
                    "id": "7342021",
                    "name": "Schmersal",
                    "results": 3
                },
                {
                    "id": "7318547",
                    "name": "SecPower",
                    "results": 3
                },
                {
                    "id": "7311718",
                    "name": "Ab Midia",
                    "results": 3
                },
                {
                    "id": "6880120",
                    "name": "Lartec",
                    "results": 3
                },
                {
                    "id": "6818488",
                    "name": "Abmidia",
                    "results": 3
                },
                {
                    "id": "6729605",
                    "name": "Pró Euro",
                    "results": 3
                },
                {
                    "id": "6580424",
                    "name": "Fun Divirta-Se",
                    "results": 3
                },
                {
                    "id": "6572785",
                    "name": "Mega Compras",
                    "results": 3
                },
                {
                    "id": "6444227",
                    "name": "4Home",
                    "results": 3
                },
                {
                    "id": "6266697",
                    "name": "Dolce Home",
                    "results": 3
                },
                {
                    "id": "6218993",
                    "name": "Zoop Toys",
                    "results": 3
                },
                {
                    "id": "6190266",
                    "name": "Carlo Gavazzi",
                    "results": 3
                },
                {
                    "id": "6174255",
                    "name": "ESAB",
                    "results": 3
                },
                {
                    "id": "6132603",
                    "name": "CS",
                    "results": 3
                },
                {
                    "id": "6089830",
                    "name": "CQC",
                    "results": 3
                },
                {
                    "id": "60552",
                    "name": "GMC",
                    "results": 3
                },
                {
                    "id": "5999177",
                    "name": "Soft",
                    "results": 3
                },
                {
                    "id": "597",
                    "name": "Saeco",
                    "results": 3
                },
                {
                    "id": "5969730",
                    "name": "Iconnect",
                    "results": 3
                },
                {
                    "id": "5898945",
                    "name": "Diversos",
                    "results": 3
                },
                {
                    "id": "5751579",
                    "name": "M&C",
                    "results": 3
                },
                {
                    "id": "5628218",
                    "name": "Advansat",
                    "results": 3
                }
            ]
        },
        {
            "id": "ITEM_CONDITION",
            "name": "Condição",
            "type": "STRING",
            "values": [
                {
                    "id": "2230284",
                    "name": "Novo",
                    "results": 2011050
                },
                {
                    "id": "2230581",
                    "name": "Usado",
                    "results": 2094
                }
            ]
        },
        {
            "id": "SHIPPING_ORIGIN",
            "name": "Tipo de compra",
            "type": "STRING",
            "values": [
                {
                    "id": "10215068",
                    "name": "Local",
                    "results": 2013145
                },
                {
                    "id": "10215069",
                    "name": "Internacional",
                    "results": 2094
                }
            ]
        },
        {
            "id": "adult_content",
            "name": "Filtro de conteúdo para adultos",
            "type": "boolean",
            "values": [
                {
                    "id": "yes",
                    "name": "Conteúdo para adultos",
                    "results": 404
                }
            ]
        },
        {
            "id": "product",
            "name": "Produto",
            "type": "text",
            "values": [
                {
                    "id": "MLB17449996",
                    "name": "KDT Aquecedor Central Digital Elétrica",
                    "results": 3142
                },
                {
                    "id": "MLB8065964",
                    "name": "Intelbras TS 5123",
                    "results": 3142
                },
                {
                    "id": "MLB19888573",
                    "name": "BEDIN BDF-12",
                    "results": 2094
                },
                {
                    "id": "MLB14421010",
                    "name": "Intelbras TS 2510",
                    "results": 1745
                },
                {
                    "id": "MLB14865031",
                    "name": "Qualitronix QR51",
                    "results": 1745
                },
                {
                    "id": "MLB15834420",
                    "name": "Panasonic KX-TGC220LBB",
                    "results": 1745
                },
                {
                    "id": "MLB16052887",
                    "name": "Britânia Inox Plus BCF36I",
                    "results": 1745
                },
                {
                    "id": "MLB18906216",
                    "name": "Cafeteira Britânia Inox Plus BCF36I semi automática preta de filtro 127V",
                    "results": 1745
                },
                {
                    "id": "MLB19691025",
                    "name": "Lego Marvel 10781",
                    "results": 1745
                },
                {
                    "id": "MLB19728022",
                    "name": "Intelbras CFW 8031",
                    "results": 1745
                },
                {
                    "id": "MLB22936543",
                    "name": "Armadilha Eletrônica Led Uv Mata Mosquito Pernilongo Insetos Led Usb Energia",
                    "results": 1745
                },
                {
                    "id": "MLB8065965",
                    "name": "Telefone sem fio Intelbras TS 5123 preto",
                    "results": 1745
                },
                {
                    "id": "MLB19748097",
                    "name": "Sumexr Headset Celular, Academia, Android, Áudio, Auricular, Barato, Bluetooth, Caminhada, Corrida, Eletrônicos, Esportes, Fone, Fone De Ouvido, Garantia, Infantil, Intra Auricular, Ios, Lightning, Ma",
                    "results": 1396
                },
                {
                    "id": "MLB19766720",
                    "name": "Cartão Micro Sd Intelbras 128gb 64tbw P Segurança Eletrônica",
                    "results": 1047
                },
                {
                    "id": "MLB13185745",
                    "name": "Motorola MOTO700",
                    "results": 349
                },
                {
                    "id": "MLB13263945",
                    "name": "Telefone sem fio Motorola MOTO700 preto",
                    "results": 349
                },
                {
                    "id": "MLB14421011",
                    "name": "Telefone sem fio Intelbras TS 2510 preto",
                    "results": 349
                },
                {
                    "id": "MLB14806572",
                    "name": "Digimec DPF-1",
                    "results": 349
                },
                {
                    "id": "MLB15345576",
                    "name": "Baseus Encok D02",
                    "results": 349
                },
                {
                    "id": "MLB15468441",
                    "name": "Lorben BM96-X",
                    "results": 349
                },
                {
                    "id": "MLB15468442",
                    "name": "Cofre Lorben BM96-X com abertura eletrônica cor preto",
                    "results": 349
                },
                {
                    "id": "MLB15834421",
                    "name": "Telefone sem fio Panasonic KX-TGC220LBB preto",
                    "results": 349
                },
                {
                    "id": "MLB17449997",
                    "name": "Aquecedor elétrico KDT Aquecedor Central Digital branco 220V",
                    "results": 349
                },
                {
                    "id": "MLB18914706",
                    "name": "Memória RAM ValueRAM color verde  8GB 1 Kingston KVR16N11/8",
                    "results": 349
                },
                {
                    "id": "MLB19538629",
                    "name": "3 Repelentes Eletrônicos De Pernilongo, Ratos E Morcegos - Dni 6954 DNI Eletrônico",
                    "results": 349
                },
                {
                    "id": "MLB19538631",
                    "name": "3 Repelentes Eletrônicos De Pernilongo, Ratos E Morcegos - Dni 6954",
                    "results": 349
                },
                {
                    "id": "MLB19691042",
                    "name": "Lego Miles Morales 10781 Triciclo Eletronico Do Homem Aranha Quantidade De Peças 59",
                    "results": 349
                },
                {
                    "id": "MLB19728037",
                    "name": "Telefone Rural Celular Fixo Intelbras Cfw 8031 3g Wifi Preto",
                    "results": 349
                },
                {
                    "id": "MLB19746991",
                    "name": "Polibrinq Robo Zig",
                    "results": 349
                },
                {
                    "id": "MLB19746995",
                    "name": "Robô Inteligente Educativo Zig Anda Ensina Inglês 25 Funções Cor Branco Personagem Robô",
                    "results": 349
                },
                {
                    "id": "MLB19760794",
                    "name": "Aparelho Espanta Rato E Morcego 1000m² Cabo 5m Original MEGT REM-3002",
                    "results": 349
                },
                {
                    "id": "MLB19760802",
                    "name": "Aparelho Espanta Rato E Morcego 1000m² Cabo 5m Original",
                    "results": 349
                },
                {
                    "id": "MLB19766716",
                    "name": "Cartão Micro Sd 64gb 32tbw Intelbras Alto Desempenho",
                    "results": 349
                },
                {
                    "id": "MLB19775532",
                    "name": "Aquário ca-42se 4G",
                    "results": 349
                },
                {
                    "id": "MLB19775534",
                    "name": "Celular Rural De Mesa Aquário 2 Chip Internet 2g 3g 4g Wifi",
                    "results": 349
                },
                {
                    "id": "MLB19888574",
                    "name": "Celular De Mesa Bedin Sat 5 Bandas 3g Wi-fi E Roteador Bdf12",
                    "results": 349
                },
                {
                    "id": "MLB20226759",
                    "name": "Pmcell P2 FO-13",
                    "results": 349
                },
                {
                    "id": "MLB20226786",
                    "name": "Fone De Ouvido Pmcell Fo-13",
                    "results": 349
                },
                {
                    "id": "MLB20233351",
                    "name": "Repelente Eletrônico Bivolt Ultrassônico Para Barata BARATA",
                    "results": 349
                },
                {
                    "id": "MLB20233389",
                    "name": "Repelente Eletrônico Bivolt Ultrassônico Para Barata",
                    "results": 349
                },
                {
                    "id": "MLB20681150",
                    "name": "JGL ELETRÔNICOS ModeloMG16/4, MG16/6, MG166cx USB, MG20/6 MIXERS, STEINBERG MR816X MIKE 3 VIAS",
                    "results": 349
                },
                {
                    "id": "MLB20681159",
                    "name": "Fonte Carregador Yamaha Pa 30",
                    "results": 349
                },
                {
                    "id": "MLB20692930",
                    "name": "Forkis FK-CF007",
                    "results": 349
                },
                {
                    "id": "MLB20692931",
                    "name": "Cofre Eletrônico Digital Em Aço Teclado Senha + 2 Chaves 23x17x17 Forkis Fk-cf007 ",
                    "results": 349
                },
                {
                    "id": "MLB20771602",
                    "name": "Repelente Eletrônico Bivolt Ultrassônico Para Mosca",
                    "results": 349
                },
                {
                    "id": "MLB20771605",
                    "name": "Repelente Eletrônico Bivolt Ultrassônico Para Mosca",
                    "results": 349
                },
                {
                    "id": "MLB21445912",
                    "name": "Balança de Precisão Digital - Balança Digital Cozinha - Balança Precisão Balança de Alimentos - 10kg - Nutrição - Dieta - Receita - Gourmet Alta Precisão - Eletrônica - Profissional - Inox - Cozinha -",
                    "results": 349
                },
                {
                    "id": "MLB21445924",
                    "name": "Balança De Cozinha Digital Alta Precisão Alimentos 10 Kg",
                    "results": 349
                },
                {
                    "id": "MLB21633608",
                    "name": "USIVALE CONECTORES 101",
                    "results": 349
                },
                {
                    "id": "MLB21744199",
                    "name": "Pró Euro Máscara de solda automática Águia, Eletrônica, Escurecimento, Visor fixo, Com tripla regulagem, DIN 4 ao 13, Para solda MMA (Eletrodo), MIG, TIG e Corte plasma, Esmerilhadeira, Soldador, Prof",
                    "results": 349
                }
            ]
        },
        {
            "id": "state",
            "name": "Localização",
            "type": "text",
            "values": [
                {
                    "id": "TUxCUFNBT085N2E4",
                    "name": "São Paulo",
                    "results": 1836131
                },
                {
                    "id": "TUxCUE1JTlMxNTAyZA",
                    "name": "Minas Gerais",
                    "results": 171777
                },
                {
                    "id": "TUxCUFNBTkE5Nzc4",
                    "name": "Santa Catarina",
                    "results": 171078
                },
                {
                    "id": "TUxCUFBBUkExODBlZA",
                    "name": "Paraná",
                    "results": 135815
                },
                {
                    "id": "TUxCUFJJT08xODM5Zg",
                    "name": "Rio de Janeiro",
                    "results": 119755
                },
                {
                    "id": "TUxCUFJJT0xkYzM0",
                    "name": "Rio Grande do Sul",
                    "results": 76810
                },
                {
                    "id": "TUxCUEJBSEFlYmEx",
                    "name": "Bahia",
                    "results": 42595
                },
                {
                    "id": "TUxCUEVTUE8xN2Y3NA",
                    "name": "Espírito Santo",
                    "results": 31422
                },
                {
                    "id": "TUxCUEdPSVMxNzVmMw",
                    "name": "Goiás",
                    "results": 12918
                },
                {
                    "id": "TUxCUERJU0wxMWJhYg",
                    "name": "Distrito Federal",
                    "results": 10125
                },
                {
                    "id": "TUxCUE1BVEw4ZTc",
                    "name": "Mato Grosso do Sul",
                    "results": 5586
                },
                {
                    "id": "TUxCUE1BVE9jZDY0",
                    "name": "Mato Grosso",
                    "results": 1396
                },
                {
                    "id": "TUxCUFBFUk8xZmZj",
                    "name": "Pernambuco",
                    "results": 1396
                },
                {
                    "id": "TUxCUFNFUkUxMmZlOQ",
                    "name": "Sergipe",
                    "results": 1396
                },
                {
                    "id": "TUxCUFRPQ1NjZDBm",
                    "name": "Tocantins",
                    "results": 1396
                }
            ]
        }
    ]
});
});//app get

app.listen(port, () => {
  console.log(`Servidor Express rodando em http://localhost:${port}`);
});