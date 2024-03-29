const data = [
    {
        "Section": "A",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Agriculture, Forestry And Fishing"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": null,
        "Class": null,
        "Activity": "Crop and animal production, hunting and related service activities"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.1",
        "Class": null,
        "Activity": "Growing of non-perennial crops"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.1",
        "Class": "01.11",
        "Activity": "Growing of cereals (except rice), leguminous crops and oil seeds"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.1",
        "Class": "01.12",
        "Activity": "Growing of rice"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.1",
        "Class": "01.13",
        "Activity": "Growing of vegetables and melons, roots and tubers"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.1",
        "Class": "01.14",
        "Activity": "Growing of sugar cane"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.1",
        "Class": "01.15",
        "Activity": "Growing of tobacco"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.1",
        "Class": "01.16",
        "Activity": "Growing of fibre crops"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.1",
        "Class": "01.19",
        "Activity": "Growing of other non-perennial crops"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.2",
        "Class": null,
        "Activity": "Growing of perennial crops"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.2",
        "Class": "01.21",
        "Activity": "Growing of grapes"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.2",
        "Class": "01.22",
        "Activity": "Growing of tropical and subtropical fruits"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.2",
        "Class": "01.23",
        "Activity": "Growing of citrus fruits"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.2",
        "Class": "01.24",
        "Activity": "Growing of pome fruits and stone fruits"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.2",
        "Class": "01.25",
        "Activity": "Growing of other tree and bush fruits and nuts"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.2",
        "Class": "01.26",
        "Activity": "Growing of oleaginous fruits"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.2",
        "Class": "01.27",
        "Activity": "Growing of beverage crops"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.2",
        "Class": "01.28",
        "Activity": "Growing of spices, aromatic, drug and pharmaceutical crops"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.2",
        "Class": "01.29",
        "Activity": "Growing of other perennial crops"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.3",
        "Class": null,
        "Activity": "Plant propagation"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.3",
        "Class": "01.30",
        "Activity": "Plant propagation"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.4",
        "Class": null,
        "Activity": "Animal production"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.4",
        "Class": "01.41",
        "Activity": "Raising of dairy cattle"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.4",
        "Class": "01.42",
        "Activity": "Raising of other cattle and buffaloes"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.4",
        "Class": "01.43",
        "Activity": "Raising of horses and other equines"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.4",
        "Class": "01.44",
        "Activity": "Raising of camels and camelids"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.4",
        "Class": "01.45",
        "Activity": "Raising of sheep and goats"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.4",
        "Class": "01.46",
        "Activity": "Raising of swine/pigs"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.4",
        "Class": "01.47",
        "Activity": "Raising of poultry"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.4",
        "Class": "01.49",
        "Activity": "Raising of other animals"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.5",
        "Class": null,
        "Activity": "Mixed farming"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.5",
        "Class": "01.50",
        "Activity": "Mixed farming"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.6",
        "Class": null,
        "Activity": "Support activities to agriculture and post-harvest crop activities"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.6",
        "Class": "01.61",
        "Activity": "Support activities for crop production"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.6",
        "Class": "01.62",
        "Activity": "Support activities for animal production"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.6",
        "Class": "01.63",
        "Activity": "Post-harvest crop activities"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.6",
        "Class": "01.64",
        "Activity": "Seed processing for propagation"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.7",
        "Class": null,
        "Activity": "Hunting, trapping and related service activities"
    },
    {
        "Section": "A",
        "Division": "01",
        "Group": "01.7",
        "Class": "01.70",
        "Activity": "Hunting, trapping and related service activities"
    },
    {
        "Section": "A",
        "Division": "02",
        "Group": null,
        "Class": null,
        "Activity": "Forestry and logging"
    },
    {
        "Section": "A",
        "Division": "02",
        "Group": "02.1",
        "Class": null,
        "Activity": "Silviculture and other forestry activities"
    },
    {
        "Section": "A",
        "Division": "02",
        "Group": "02.1",
        "Class": "02.10",
        "Activity": "Silviculture and other forestry activities"
    },
    {
        "Section": "A",
        "Division": "02",
        "Group": "02.2",
        "Class": null,
        "Activity": "Logging"
    },
    {
        "Section": "A",
        "Division": "02",
        "Group": "02.2",
        "Class": "02.20",
        "Activity": "Logging"
    },
    {
        "Section": "A",
        "Division": "02",
        "Group": "02.3",
        "Class": null,
        "Activity": "Gathering of wild growing non-wood products"
    },
    {
        "Section": "A",
        "Division": "02",
        "Group": "02.3",
        "Class": "02.30",
        "Activity": "Gathering of wild growing non-wood products"
    },
    {
        "Section": "A",
        "Division": "02",
        "Group": "02.4",
        "Class": null,
        "Activity": "Support services to forestry"
    },
    {
        "Section": "A",
        "Division": "02",
        "Group": "02.4",
        "Class": "02.40",
        "Activity": "Support services to forestry"
    },
    {
        "Section": "A",
        "Division": "03",
        "Group": null,
        "Class": null,
        "Activity": "Fishing and aquaculture"
    },
    {
        "Section": "A",
        "Division": "03",
        "Group": "03.1",
        "Class": null,
        "Activity": "Fishing"
    },
    {
        "Section": "A",
        "Division": "03",
        "Group": "03.1",
        "Class": "03.11",
        "Activity": "Marine fishing"
    },
    {
        "Section": "A",
        "Division": "03",
        "Group": "03.1",
        "Class": "03.12",
        "Activity": "Freshwater fishing"
    },
    {
        "Section": "A",
        "Division": "03",
        "Group": "03.2",
        "Class": null,
        "Activity": "Aquaculture"
    },
    {
        "Section": "A",
        "Division": "03",
        "Group": "03.2",
        "Class": "03.21",
        "Activity": "Marine aquaculture"
    },
    {
        "Section": "A",
        "Division": "03",
        "Group": "03.2",
        "Class": "03.22",
        "Activity": "Freshwater aquaculture"
    },
    {
        "Section": "B",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Mining And Quarrying"
    },
    {
        "Section": "B",
        "Division": "05",
        "Group": null,
        "Class": null,
        "Activity": "Mining of coal and lignite"
    },
    {
        "Section": "B",
        "Division": "05",
        "Group": "05.1",
        "Class": null,
        "Activity": "Mining of hard coal"
    },
    {
        "Section": "B",
        "Division": "05",
        "Group": "05.1",
        "Class": "05.10",
        "Activity": "Mining of hard coal"
    },
    {
        "Section": "B",
        "Division": "05",
        "Group": "05.2",
        "Class": null,
        "Activity": "Mining of lignite"
    },
    {
        "Section": "B",
        "Division": "05",
        "Group": "05.2",
        "Class": "05.20",
        "Activity": "Mining of lignite"
    },
    {
        "Section": "B",
        "Division": "06",
        "Group": null,
        "Class": null,
        "Activity": "Extraction of crude petroleum and natural gas"
    },
    {
        "Section": "B",
        "Division": "06",
        "Group": "06.1",
        "Class": null,
        "Activity": "Extraction of crude petroleum"
    },
    {
        "Section": "B",
        "Division": "06",
        "Group": "06.1",
        "Class": "06.10",
        "Activity": "Extraction of crude petroleum"
    },
    {
        "Section": "B",
        "Division": "06",
        "Group": "06.2",
        "Class": null,
        "Activity": "Extraction of natural gas"
    },
    {
        "Section": "B",
        "Division": "06",
        "Group": "06.2",
        "Class": "06.20",
        "Activity": "Extraction of natural gas"
    },
    {
        "Section": "B",
        "Division": "07",
        "Group": null,
        "Class": null,
        "Activity": "Mining of metal ores"
    },
    {
        "Section": "B",
        "Division": "07",
        "Group": "07.1",
        "Class": null,
        "Activity": "Mining of iron ores"
    },
    {
        "Section": "B",
        "Division": "07",
        "Group": "07.1",
        "Class": "07.10",
        "Activity": "Mining of iron ores"
    },
    {
        "Section": "B",
        "Division": "07",
        "Group": "07.2",
        "Class": null,
        "Activity": "Mining of non-ferrous metal ores"
    },
    {
        "Section": "B",
        "Division": "07",
        "Group": "07.2",
        "Class": "07.21",
        "Activity": "Mining of uranium and thorium ores"
    },
    {
        "Section": "B",
        "Division": "07",
        "Group": "07.2",
        "Class": "07.29",
        "Activity": "Mining of other non-ferrous metal ores"
    },
    {
        "Section": "B",
        "Division": "08",
        "Group": null,
        "Class": null,
        "Activity": "Other mining and quarrying"
    },
    {
        "Section": "B",
        "Division": "08",
        "Group": "08.1",
        "Class": null,
        "Activity": "Quarrying of stone, sand and clay"
    },
    {
        "Section": "B",
        "Division": "08",
        "Group": "08.1",
        "Class": "08.11",
        "Activity": "Quarrying of ornamental and building stone, limestone, gypsum, chalk and slate"
    },
    {
        "Section": "B",
        "Division": "08",
        "Group": "08.1",
        "Class": "08.12",
        "Activity": "Operation of gravel and sand pits; mining of clays and kaolin"
    },
    {
        "Section": "B",
        "Division": "08",
        "Group": "08.9",
        "Class": null,
        "Activity": "Mining and quarrying n.e.c."
    },
    {
        "Section": "B",
        "Division": "08",
        "Group": "08.9",
        "Class": "08.91",
        "Activity": "Mining of chemical and fertiliser minerals"
    },
    {
        "Section": "B",
        "Division": "08",
        "Group": "08.9",
        "Class": "08.92",
        "Activity": "Extraction of peat"
    },
    {
        "Section": "B",
        "Division": "08",
        "Group": "08.9",
        "Class": "08.93",
        "Activity": "Extraction of salt"
    },
    {
        "Section": "B",
        "Division": "08",
        "Group": "08.9",
        "Class": "08.99",
        "Activity": "Other mining and quarrying n.e.c."
    },
    {
        "Section": "B",
        "Division": "09",
        "Group": null,
        "Class": null,
        "Activity": "Mining support service activities"
    },
    {
        "Section": "B",
        "Division": "09",
        "Group": "09.1",
        "Class": null,
        "Activity": "Support activities for petroleum and natural gas extraction"
    },
    {
        "Section": "B",
        "Division": "09",
        "Group": "09.1",
        "Class": "09.10",
        "Activity": "Support activities for petroleum and natural gas extraction"
    },
    {
        "Section": "B",
        "Division": "09",
        "Group": "09.9",
        "Class": null,
        "Activity": "Support activities for other mining and quarrying"
    },
    {
        "Section": "B",
        "Division": "09",
        "Group": "09.9",
        "Class": "09.90",
        "Activity": "Support activities for other mining and quarrying"
    },
    {
        "Section": "C",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Manufacturing"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of food products"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.1",
        "Class": null,
        "Activity": "Processing and preserving of meat and production of meat products"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.1",
        "Class": "10.11",
        "Activity": "Processing and preserving of meat"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.1",
        "Class": "10.12",
        "Activity": "Processing and preserving of poultry meat"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.1",
        "Class": "10.13",
        "Activity": "Production of meat and poultry meat products"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.2",
        "Class": null,
        "Activity": "Processing and preserving of fish, crustaceans and molluscs"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.2",
        "Class": "10.20",
        "Activity": "Processing and preserving of fish, crustaceans and molluscs"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.3",
        "Class": null,
        "Activity": "Processing and preserving of fruit and vegetables"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.3",
        "Class": "10.31",
        "Activity": "Processing and preserving of potatoes"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.3",
        "Class": "10.32",
        "Activity": "Manufacture of fruit and vegetable juice"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.3",
        "Class": "10.39",
        "Activity": "Other processing and preserving of fruit and vegetables"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.4",
        "Class": null,
        "Activity": "Manufacture of vegetable and animal oils and fats"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.4",
        "Class": "10.41",
        "Activity": "Manufacture of oils and fats"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.4",
        "Class": "10.42",
        "Activity": "Manufacture of margarine and similar edible fats"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.5",
        "Class": null,
        "Activity": "Manufacture of dairy products"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.5",
        "Class": "10.51",
        "Activity": "Operation of dairies and cheese making"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.5",
        "Class": "10.52",
        "Activity": "Manufacture of ice cream"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.6",
        "Class": null,
        "Activity": "Manufacture of grain mill products, starches and starch products"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.6",
        "Class": "10.61",
        "Activity": "Manufacture of grain mill products"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.6",
        "Class": "10.62",
        "Activity": "Manufacture of starches and starch products"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.7",
        "Class": null,
        "Activity": "Manufacture of bakery and farinaceous products"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.7",
        "Class": "10.71",
        "Activity": "Manufacture of bread; manufacture of fresh pastry goods and cakes"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.7",
        "Class": "10.72",
        "Activity": "Manufacture of rusks and biscuits; manufacture of preserved pastry goods and cakes"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.7",
        "Class": "10.73",
        "Activity": "Manufacture of macaroni, noodles, couscous and similar farinaceous products"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.8",
        "Class": null,
        "Activity": "Manufacture of other food products"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.8",
        "Class": "10.81",
        "Activity": "Manufacture of sugar"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.8",
        "Class": "10.82",
        "Activity": "Manufacture of cocoa, chocolate and sugar confectionery"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.8",
        "Class": "10.83",
        "Activity": "Processing of tea and coffee"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.8",
        "Class": "10.84",
        "Activity": "Manufacture of condiments and seasonings"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.8",
        "Class": "10.85",
        "Activity": "Manufacture of prepared meals and dishes"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.8",
        "Class": "10.86",
        "Activity": "Manufacture of homogenised food preparations and dietetic food"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.8",
        "Class": "10.89",
        "Activity": "Manufacture of other food products n.e.c."
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.9",
        "Class": null,
        "Activity": "Manufacture of prepared animal feeds"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.9",
        "Class": "10.91",
        "Activity": "Manufacture of prepared feeds for farm animals"
    },
    {
        "Section": "C",
        "Division": "10",
        "Group": "10.9",
        "Class": "10.92",
        "Activity": "Manufacture of prepared pet foods"
    },
    {
        "Section": "C",
        "Division": "11",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of beverages"
    },
    {
        "Section": "C",
        "Division": "11",
        "Group": "11.0",
        "Class": null,
        "Activity": "Manufacture of beverages"
    },
    {
        "Section": "C",
        "Division": "11",
        "Group": "11.0",
        "Class": "11.01",
        "Activity": "Distilling, rectifying and blending of spirits"
    },
    {
        "Section": "C",
        "Division": "11",
        "Group": "11.0",
        "Class": "11.02",
        "Activity": "Manufacture of wine from grape"
    },
    {
        "Section": "C",
        "Division": "11",
        "Group": "11.0",
        "Class": "11.03",
        "Activity": "Manufacture of cider and other fruit wines"
    },
    {
        "Section": "C",
        "Division": "11",
        "Group": "11.0",
        "Class": "11.04",
        "Activity": "Manufacture of other non-distilled fermented beverages"
    },
    {
        "Section": "C",
        "Division": "11",
        "Group": "11.0",
        "Class": "11.05",
        "Activity": "Manufacture of beer"
    },
    {
        "Section": "C",
        "Division": "11",
        "Group": "11.0",
        "Class": "11.06",
        "Activity": "Manufacture of malt"
    },
    {
        "Section": "C",
        "Division": "11",
        "Group": "11.0",
        "Class": "11.07",
        "Activity": "Manufacture of soft drinks; production of mineral waters and other bottled waters"
    },
    {
        "Section": "C",
        "Division": "12",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of tobacco products"
    },
    {
        "Section": "C",
        "Division": "12",
        "Group": "12.0",
        "Class": null,
        "Activity": "Manufacture of tobacco products"
    },
    {
        "Section": "C",
        "Division": "12",
        "Group": "12.0",
        "Class": "12.00",
        "Activity": "Manufacture of tobacco products"
    },
    {
        "Section": "C",
        "Division": "13",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of textiles"
    },
    {
        "Section": "C",
        "Division": "13",
        "Group": "13.1",
        "Class": null,
        "Activity": "Preparation and spinning of textile fibres"
    },
    {
        "Section": "C",
        "Division": "13",
        "Group": "13.1",
        "Class": "13.10",
        "Activity": "Preparation and spinning of textile fibres"
    },
    {
        "Section": "C",
        "Division": "13",
        "Group": "13.2",
        "Class": null,
        "Activity": "Weaving of textiles"
    },
    {
        "Section": "C",
        "Division": "13",
        "Group": "13.2",
        "Class": "13.20",
        "Activity": "Weaving of textiles"
    },
    {
        "Section": "C",
        "Division": "13",
        "Group": "13.3",
        "Class": null,
        "Activity": "Finishing of textiles"
    },
    {
        "Section": "C",
        "Division": "13",
        "Group": "13.3",
        "Class": "13.30",
        "Activity": "Finishing of textiles"
    },
    {
        "Section": "C",
        "Division": "13",
        "Group": "13.9",
        "Class": null,
        "Activity": "Manufacture of other textiles"
    },
    {
        "Section": "C",
        "Division": "13",
        "Group": "13.9",
        "Class": "13.91",
        "Activity": "Manufacture of knitted and crocheted fabrics"
    },
    {
        "Section": "C",
        "Division": "13",
        "Group": "13.9",
        "Class": "13.92",
        "Activity": "Manufacture of made-up textile articles, except apparel"
    },
    {
        "Section": "C",
        "Division": "13",
        "Group": "13.9",
        "Class": "13.93",
        "Activity": "Manufacture of carpets and rugs"
    },
    {
        "Section": "C",
        "Division": "13",
        "Group": "13.9",
        "Class": "13.94",
        "Activity": "Manufacture of cordage, rope, twine and netting"
    },
    {
        "Section": "C",
        "Division": "13",
        "Group": "13.9",
        "Class": "13.95",
        "Activity": "Manufacture of non-wovens and articles made from non-wovens, except apparel"
    },
    {
        "Section": "C",
        "Division": "13",
        "Group": "13.9",
        "Class": "13.96",
        "Activity": "Manufacture of other technical and industrial textiles"
    },
    {
        "Section": "C",
        "Division": "13",
        "Group": "13.9",
        "Class": "13.99",
        "Activity": "Manufacture of other textiles n.e.c."
    },
    {
        "Section": "C",
        "Division": "14",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of wearing apparel"
    },
    {
        "Section": "C",
        "Division": "14",
        "Group": "14.1",
        "Class": null,
        "Activity": "Manufacture of wearing apparel, except fur apparel"
    },
    {
        "Section": "C",
        "Division": "14",
        "Group": "14.1",
        "Class": "14.11",
        "Activity": "Manufacture of leather clothes"
    },
    {
        "Section": "C",
        "Division": "14",
        "Group": "14.1",
        "Class": "14.12",
        "Activity": "Manufacture of workwear"
    },
    {
        "Section": "C",
        "Division": "14",
        "Group": "14.1",
        "Class": "14.13",
        "Activity": "Manufacture of other outerwear"
    },
    {
        "Section": "C",
        "Division": "14",
        "Group": "14.1",
        "Class": "14.14",
        "Activity": "Manufacture of underwear"
    },
    {
        "Section": "C",
        "Division": "14",
        "Group": "14.1",
        "Class": "14.19",
        "Activity": "Manufacture of other wearing apparel and accessories"
    },
    {
        "Section": "C",
        "Division": "14",
        "Group": "14.2",
        "Class": null,
        "Activity": "Manufacture of articles of fur"
    },
    {
        "Section": "C",
        "Division": "14",
        "Group": "14.2",
        "Class": "14.20",
        "Activity": "Manufacture of articles of fur"
    },
    {
        "Section": "C",
        "Division": "14",
        "Group": "14.3",
        "Class": null,
        "Activity": "Manufacture of knitted and crocheted apparel"
    },
    {
        "Section": "C",
        "Division": "14",
        "Group": "14.3",
        "Class": "14.31",
        "Activity": "Manufacture of knitted and crocheted hosiery"
    },
    {
        "Section": "C",
        "Division": "14",
        "Group": "14.3",
        "Class": "14.39",
        "Activity": "Manufacture of other knitted and crocheted apparel"
    },
    {
        "Section": "C",
        "Division": "15",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of leather and related products"
    },
    {
        "Section": "C",
        "Division": "15",
        "Group": "15.1",
        "Class": null,
        "Activity": "Tanning and dressing of leather; manufacture of luggage, handbags, saddlery and harness; dressing and dyeing of fur"
    },
    {
        "Section": "C",
        "Division": "15",
        "Group": "15.1",
        "Class": "15.11",
        "Activity": "Tanning and dressing of leather; dressing and dyeing of fur"
    },
    {
        "Section": "C",
        "Division": "15",
        "Group": "15.1",
        "Class": "15.12",
        "Activity": "Manufacture of luggage, handbags and the like, saddlery and harness"
    },
    {
        "Section": "C",
        "Division": "15",
        "Group": "15.2",
        "Class": null,
        "Activity": "Manufacture of footwear"
    },
    {
        "Section": "C",
        "Division": "15",
        "Group": "15.2",
        "Class": "15.20",
        "Activity": "Manufacture of footwear"
    },
    {
        "Section": "C",
        "Division": "16",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of wood and of products of wood and cork, except furniture; manufacture of articles of straw and plaiting materials"
    },
    {
        "Section": "C",
        "Division": "16",
        "Group": "16.1",
        "Class": null,
        "Activity": "Sawmilling and planing of wood"
    },
    {
        "Section": "C",
        "Division": "16",
        "Group": "16.1",
        "Class": "16.10",
        "Activity": "Sawmilling and planing of wood"
    },
    {
        "Section": "C",
        "Division": "16",
        "Group": "16.2",
        "Class": null,
        "Activity": "Manufacture of products of wood, cork, straw and plaiting materials"
    },
    {
        "Section": "C",
        "Division": "16",
        "Group": "16.2",
        "Class": "16.21",
        "Activity": "Manufacture of veneer sheets and wood-based panels"
    },
    {
        "Section": "C",
        "Division": "16",
        "Group": "16.2",
        "Class": "16.22",
        "Activity": "Manufacture of assembled parquet floors"
    },
    {
        "Section": "C",
        "Division": "16",
        "Group": "16.2",
        "Class": "16.23",
        "Activity": "Manufacture of other builders' carpentry and joinery"
    },
    {
        "Section": "C",
        "Division": "16",
        "Group": "16.2",
        "Class": "16.24",
        "Activity": "Manufacture of wooden containers"
    },
    {
        "Section": "C",
        "Division": "16",
        "Group": "16.2",
        "Class": "16.29",
        "Activity": "Manufacture of other products of wood; manufacture of articles of cork, straw and plaiting materials"
    },
    {
        "Section": "C",
        "Division": "17",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of paper and paper products"
    },
    {
        "Section": "C",
        "Division": "17",
        "Group": "17.1",
        "Class": null,
        "Activity": "Manufacture of pulp, paper and paperboard"
    },
    {
        "Section": "C",
        "Division": "17",
        "Group": "17.1",
        "Class": "17.11",
        "Activity": "Manufacture of pulp"
    },
    {
        "Section": "C",
        "Division": "17",
        "Group": "17.1",
        "Class": "17.12",
        "Activity": "Manufacture of paper and paperboard"
    },
    {
        "Section": "C",
        "Division": "17",
        "Group": "17.2",
        "Class": null,
        "Activity": "Manufacture of articles of paper and paperboard"
    },
    {
        "Section": "C",
        "Division": "17",
        "Group": "17.2",
        "Class": "17.21",
        "Activity": "Manufacture of corrugated paper and paperboard and of containers of paper and paperboard"
    },
    {
        "Section": "C",
        "Division": "17",
        "Group": "17.2",
        "Class": "17.22",
        "Activity": "Manufacture of household and sanitary goods and of toilet requisites"
    },
    {
        "Section": "C",
        "Division": "17",
        "Group": "17.2",
        "Class": "17.23",
        "Activity": "Manufacture of paper stationery"
    },
    {
        "Section": "C",
        "Division": "17",
        "Group": "17.2",
        "Class": "17.24",
        "Activity": "Manufacture of wallpaper"
    },
    {
        "Section": "C",
        "Division": "17",
        "Group": "17.2",
        "Class": "17.29",
        "Activity": "Manufacture of other articles of paper and paperboard"
    },
    {
        "Section": "C",
        "Division": "18",
        "Group": null,
        "Class": null,
        "Activity": "Printing and reproduction of recorded media"
    },
    {
        "Section": "C",
        "Division": "18",
        "Group": "18.1",
        "Class": null,
        "Activity": "Printing and service activities related to printing"
    },
    {
        "Section": "C",
        "Division": "18",
        "Group": "18.1",
        "Class": "18.11",
        "Activity": "Printing of newspapers"
    },
    {
        "Section": "C",
        "Division": "18",
        "Group": "18.1",
        "Class": "18.12",
        "Activity": "Other printing"
    },
    {
        "Section": "C",
        "Division": "18",
        "Group": "18.1",
        "Class": "18.13",
        "Activity": "Pre-press and pre-media services"
    },
    {
        "Section": "C",
        "Division": "18",
        "Group": "18.1",
        "Class": "18.14",
        "Activity": "Binding and related services"
    },
    {
        "Section": "C",
        "Division": "18",
        "Group": "18.2",
        "Class": null,
        "Activity": "Reproduction of recorded media"
    },
    {
        "Section": "C",
        "Division": "18",
        "Group": "18.2",
        "Class": "18.20",
        "Activity": "Reproduction of recorded media"
    },
    {
        "Section": "C",
        "Division": "19",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of coke and refined petroleum products"
    },
    {
        "Section": "C",
        "Division": "19",
        "Group": "19.1",
        "Class": null,
        "Activity": "Manufacture of coke oven products"
    },
    {
        "Section": "C",
        "Division": "19",
        "Group": "19.1",
        "Class": "19.10",
        "Activity": "Manufacture of coke oven products"
    },
    {
        "Section": "C",
        "Division": "19",
        "Group": "19.2",
        "Class": null,
        "Activity": "Manufacture of refined petroleum products"
    },
    {
        "Section": "C",
        "Division": "19",
        "Group": "19.2",
        "Class": "19.20",
        "Activity": "Manufacture of refined petroleum products"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of chemicals and chemical products"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.1",
        "Class": null,
        "Activity": "Manufacture of basic chemicals, fertilisers and nitrogen compounds, plastics and synthetic rubber in primary forms"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.1",
        "Class": "20.11",
        "Activity": "Manufacture of industrial gases"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.1",
        "Class": "20.12",
        "Activity": "Manufacture of dyes and pigments"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.1",
        "Class": "20.13",
        "Activity": "Manufacture of other inorganic basic chemicals"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.1",
        "Class": "20.14",
        "Activity": "Manufacture of other organic basic chemicals"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.1",
        "Class": "20.15",
        "Activity": "Manufacture of fertilisers and nitrogen compounds"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.1",
        "Class": "20.16",
        "Activity": "Manufacture of plastics in primary forms"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.1",
        "Class": "20.17",
        "Activity": "Manufacture of synthetic rubber in primary forms"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.2",
        "Class": null,
        "Activity": "Manufacture of pesticides and other agrochemical products"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.2",
        "Class": "20.20",
        "Activity": "Manufacture of pesticides and other agrochemical products"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.3",
        "Class": null,
        "Activity": "Manufacture of paints, varnishes and similar coatings, printing ink and mastics"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.3",
        "Class": "20.30",
        "Activity": "Manufacture of paints, varnishes and similar coatings, printing ink and mastics"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.4",
        "Class": null,
        "Activity": "Manufacture of soap and detergents, cleaning and polishing preparations, perfumes and toilet preparations"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.4",
        "Class": "20.41",
        "Activity": "Manufacture of soap and detergents, cleaning and polishing preparations"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.4",
        "Class": "20.42",
        "Activity": "Manufacture of perfumes and toilet preparations"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.5",
        "Class": null,
        "Activity": "Manufacture of other chemical products"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.5",
        "Class": "20.51",
        "Activity": "Manufacture of explosives"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.5",
        "Class": "20.52",
        "Activity": "Manufacture of glues"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.5",
        "Class": "20.53",
        "Activity": "Manufacture of essential oils"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.5",
        "Class": "20.59",
        "Activity": "Manufacture of other chemical products n.e.c."
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.6",
        "Class": null,
        "Activity": "Manufacture of man-made fibres"
    },
    {
        "Section": "C",
        "Division": "20",
        "Group": "20.6",
        "Class": "20.60",
        "Activity": "Manufacture of man-made fibres"
    },
    {
        "Section": "C",
        "Division": "21",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of basic pharmaceutical products and pharmaceutical preparations"
    },
    {
        "Section": "C",
        "Division": "21",
        "Group": "21.1",
        "Class": null,
        "Activity": "Manufacture of basic pharmaceutical products"
    },
    {
        "Section": "C",
        "Division": "21",
        "Group": "21.1",
        "Class": "21.10",
        "Activity": "Manufacture of basic pharmaceutical products"
    },
    {
        "Section": "C",
        "Division": "21",
        "Group": "21.2",
        "Class": null,
        "Activity": "Manufacture of pharmaceutical preparations"
    },
    {
        "Section": "C",
        "Division": "21",
        "Group": "21.2",
        "Class": "21.20",
        "Activity": "Manufacture of pharmaceutical preparations"
    },
    {
        "Section": "C",
        "Division": "22",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of rubber and plastic products"
    },
    {
        "Section": "C",
        "Division": "22",
        "Group": "22.1",
        "Class": null,
        "Activity": "Manufacture of rubber products"
    },
    {
        "Section": "C",
        "Division": "22",
        "Group": "22.1",
        "Class": "22.11",
        "Activity": "Manufacture of rubber tyres and tubes; retreading and rebuilding of rubber tyres"
    },
    {
        "Section": "C",
        "Division": "22",
        "Group": "22.1",
        "Class": "22.19",
        "Activity": "Manufacture of other rubber products"
    },
    {
        "Section": "C",
        "Division": "22",
        "Group": "22.2",
        "Class": null,
        "Activity": "Manufacture of plastics products"
    },
    {
        "Section": "C",
        "Division": "22",
        "Group": "22.2",
        "Class": "22.21",
        "Activity": "Manufacture of plastic plates, sheets, tubes and profiles"
    },
    {
        "Section": "C",
        "Division": "22",
        "Group": "22.2",
        "Class": "22.22",
        "Activity": "Manufacture of plastic packing goods"
    },
    {
        "Section": "C",
        "Division": "22",
        "Group": "22.2",
        "Class": "22.23",
        "Activity": "Manufacture of builders' ware of plastic"
    },
    {
        "Section": "C",
        "Division": "22",
        "Group": "22.2",
        "Class": "22.29",
        "Activity": "Manufacture of other plastic products"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of other non-metallic mineral products"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.1",
        "Class": null,
        "Activity": "Manufacture of glass and glass products"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.1",
        "Class": "23.11",
        "Activity": "Manufacture of flat glass"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.1",
        "Class": "23.12",
        "Activity": "Shaping and processing of flat glass"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.1",
        "Class": "23.13",
        "Activity": "Manufacture of hollow glass"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.1",
        "Class": "23.14",
        "Activity": "Manufacture of glass fibres"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.1",
        "Class": "23.19",
        "Activity": "Manufacture and processing of other glass, including technical glassware"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.2",
        "Class": null,
        "Activity": "Manufacture of refractory products"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.2",
        "Class": "23.20",
        "Activity": "Manufacture of refractory products"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.3",
        "Class": null,
        "Activity": "Manufacture of clay building materials"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.3",
        "Class": "23.31",
        "Activity": "Manufacture of ceramic tiles and flags"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.3",
        "Class": "23.32",
        "Activity": "Manufacture of bricks, tiles and construction products, in baked clay"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.4",
        "Class": null,
        "Activity": "Manufacture of other porcelain and ceramic products"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.4",
        "Class": "23.41",
        "Activity": "Manufacture of ceramic household and ornamental articles"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.4",
        "Class": "23.42",
        "Activity": "Manufacture of ceramic sanitary fixtures"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.4",
        "Class": "23.43",
        "Activity": "Manufacture of ceramic insulators and insulating fittings"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.4",
        "Class": "23.44",
        "Activity": "Manufacture of other technical ceramic products"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.4",
        "Class": "23.49",
        "Activity": "Manufacture of other ceramic products"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.5",
        "Class": null,
        "Activity": "Manufacture of cement, lime and plaster"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.5",
        "Class": "23.51",
        "Activity": "Manufacture of cement"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.5",
        "Class": "23.52",
        "Activity": "Manufacture of lime and plaster"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.6",
        "Class": null,
        "Activity": "Manufacture of articles of concrete, cement and plaster"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.6",
        "Class": "23.61",
        "Activity": "Manufacture of concrete products for construction purposes"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.6",
        "Class": "23.62",
        "Activity": "Manufacture of plaster products for construction purposes"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.6",
        "Class": "23.63",
        "Activity": "Manufacture of ready-mixed concrete"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.6",
        "Class": "23.64",
        "Activity": "Manufacture of mortars"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.6",
        "Class": "23.65",
        "Activity": "Manufacture of fibre cement"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.6",
        "Class": "23.69",
        "Activity": "Manufacture of other articles of concrete, plaster and cement"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.7",
        "Class": null,
        "Activity": "Cutting, shaping and finishing of stone"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.7",
        "Class": "23.70",
        "Activity": "Cutting, shaping and finishing of stone"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.9",
        "Class": null,
        "Activity": "Manufacture of abrasive products and non-metallic mineral products n.e.c."
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.9",
        "Class": "23.91",
        "Activity": "Production of abrasive products"
    },
    {
        "Section": "C",
        "Division": "23",
        "Group": "23.9",
        "Class": "23.99",
        "Activity": "Manufacture of other non-metallic mineral products n.e.c."
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of basic metals"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.1",
        "Class": null,
        "Activity": "Manufacture of basic iron and steel and of ferro-alloys"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.1",
        "Class": "24.10",
        "Activity": "Manufacture of basic iron and steel and of ferro-alloys"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.2",
        "Class": null,
        "Activity": "Manufacture of tubes, pipes, hollow profiles and related fittings, of steel"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.2",
        "Class": "24.20",
        "Activity": "Manufacture of tubes, pipes, hollow profiles and related fittings, of steel"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.3",
        "Class": null,
        "Activity": "Manufacture of other products of first processing of steel"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.3",
        "Class": "24.31",
        "Activity": "Cold drawing of bars"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.3",
        "Class": "24.32",
        "Activity": "Cold rolling of narrow strip"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.3",
        "Class": "24.33",
        "Activity": "Cold forming or folding"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.3",
        "Class": "24.34",
        "Activity": "Cold drawing of wire"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.4",
        "Class": null,
        "Activity": "Manufacture of basic precious and other non-ferrous metals"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.4",
        "Class": "24.41",
        "Activity": "Precious metals production"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.4",
        "Class": "24.42",
        "Activity": "Aluminium production"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.4",
        "Class": "24.43",
        "Activity": "Lead, zinc and tin production"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.4",
        "Class": "24.44",
        "Activity": "Copper production"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.4",
        "Class": "24.45",
        "Activity": "Other non-ferrous metal production"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.4",
        "Class": "24.46",
        "Activity": "Processing of nuclear fuel"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.5",
        "Class": null,
        "Activity": "Casting of metals"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.5",
        "Class": "24.51",
        "Activity": "Casting of iron"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.5",
        "Class": "24.52",
        "Activity": "Casting of steel"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.5",
        "Class": "24.53",
        "Activity": "Casting of light metals"
    },
    {
        "Section": "C",
        "Division": "24",
        "Group": "24.5",
        "Class": "24.54",
        "Activity": "Casting of other non-ferrous metals"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of fabricated metal products, except machinery and equipment"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.1",
        "Class": null,
        "Activity": "Manufacture of structural metal products"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.1",
        "Class": "25.11",
        "Activity": "Manufacture of metal structures and parts of structures"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.1",
        "Class": "25.12",
        "Activity": "Manufacture of doors and windows of metal"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.2",
        "Class": null,
        "Activity": "Manufacture of tanks, reservoirs and containers of metal"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.2",
        "Class": "25.21",
        "Activity": "Manufacture of central heating radiators and boilers"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.2",
        "Class": "25.29",
        "Activity": "Manufacture of other tanks, reservoirs and containers of metal"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.3",
        "Class": null,
        "Activity": "Manufacture of steam generators, except central heating hot water boilers"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.3",
        "Class": "25.30",
        "Activity": "Manufacture of steam generators, except central heating hot water boilers"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.4",
        "Class": null,
        "Activity": "Manufacture of weapons and ammunition"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.4",
        "Class": "25.40",
        "Activity": "Manufacture of weapons and ammunition"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.5",
        "Class": null,
        "Activity": "Forging, pressing, stamping and roll-forming of metal; powder metallurgy"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.5",
        "Class": "25.50",
        "Activity": "Forging, pressing, stamping and roll-forming of metal; powder metallurgy"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.6",
        "Class": null,
        "Activity": "Treatment and coating of metals; machining"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.6",
        "Class": "25.61",
        "Activity": "Treatment and coating of metals"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.6",
        "Class": "25.62",
        "Activity": "Machining"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.7",
        "Class": null,
        "Activity": "Manufacture of cutlery, tools and general hardware"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.7",
        "Class": "25.71",
        "Activity": "Manufacture of cutlery"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.7",
        "Class": "25.72",
        "Activity": "Manufacture of locks and hinges"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.7",
        "Class": "25.73",
        "Activity": "Manufacture of tools"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.9",
        "Class": null,
        "Activity": "Manufacture of other fabricated metal products"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.9",
        "Class": "25.91",
        "Activity": "Manufacture of steel drums and similar containers"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.9",
        "Class": "25.92",
        "Activity": "Manufacture of light metal packaging"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.9",
        "Class": "25.93",
        "Activity": "Manufacture of wire products, chain and springs"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.9",
        "Class": "25.94",
        "Activity": "Manufacture of fasteners and screw machine products"
    },
    {
        "Section": "C",
        "Division": "25",
        "Group": "25.9",
        "Class": "25.99",
        "Activity": "Manufacture of other fabricated metal products n.e.c."
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of computer, electronic and optical products"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.1",
        "Class": null,
        "Activity": "Manufacture of electronic components and boards"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.1",
        "Class": "26.11",
        "Activity": "Manufacture of electronic components"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.1",
        "Class": "26.12",
        "Activity": "Manufacture of loaded electronic boards"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.2",
        "Class": null,
        "Activity": "Manufacture of computers and peripheral equipment"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.2",
        "Class": "26.20",
        "Activity": "Manufacture of computers and peripheral equipment"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.3",
        "Class": null,
        "Activity": "Manufacture of communication equipment"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.3",
        "Class": "26.30",
        "Activity": "Manufacture of communication equipment"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.4",
        "Class": null,
        "Activity": "Manufacture of consumer electronics"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.4",
        "Class": "26.40",
        "Activity": "Manufacture of consumer electronics"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.5",
        "Class": null,
        "Activity": "Manufacture of instruments and appliances for measuring, testing and navigation; watches and clocks"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.5",
        "Class": "26.51",
        "Activity": "Manufacture of instruments and appliances for measuring, testing and navigation"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.5",
        "Class": "26.52",
        "Activity": "Manufacture of watches and clocks"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.6",
        "Class": null,
        "Activity": "Manufacture of irradiation, electromedical and electrotherapeutic equipment"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.6",
        "Class": "26.60",
        "Activity": "Manufacture of irradiation, electromedical and electrotherapeutic equipment"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.7",
        "Class": null,
        "Activity": "Manufacture of optical instruments and photographic equipment"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.7",
        "Class": "26.70",
        "Activity": "Manufacture of optical instruments and photographic equipment"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.8",
        "Class": null,
        "Activity": "Manufacture of magnetic and optical media"
    },
    {
        "Section": "C",
        "Division": "26",
        "Group": "26.8",
        "Class": "26.80",
        "Activity": "Manufacture of magnetic and optical media"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of electrical equipment"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": "27.1",
        "Class": null,
        "Activity": "Manufacture of electric motors, generators, transformers and electricity distribution and control apparatus"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": "27.1",
        "Class": "27.11",
        "Activity": "Manufacture of electric motors, generators and transformers"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": "27.1",
        "Class": "27.12",
        "Activity": "Manufacture of electricity distribution and control apparatus"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": "27.2",
        "Class": null,
        "Activity": "Manufacture of batteries and accumulators"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": "27.2",
        "Class": "27.20",
        "Activity": "Manufacture of batteries and accumulators"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": "27.3",
        "Class": null,
        "Activity": "Manufacture of wiring and wiring devices"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": "27.3",
        "Class": "27.31",
        "Activity": "Manufacture of fibre optic cables"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": "27.3",
        "Class": "27.32",
        "Activity": "Manufacture of other electronic and electric wires and cables"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": "27.3",
        "Class": "27.33",
        "Activity": "Manufacture of wiring devices"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": "27.4",
        "Class": null,
        "Activity": "Manufacture of electric lighting equipment"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": "27.4",
        "Class": "27.40",
        "Activity": "Manufacture of electric lighting equipment"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": "27.5",
        "Class": null,
        "Activity": "Manufacture of domestic appliances"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": "27.5",
        "Class": "27.51",
        "Activity": "Manufacture of electric domestic appliances"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": "27.5",
        "Class": "27.52",
        "Activity": "Manufacture of non-electric domestic appliances"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": "27.9",
        "Class": null,
        "Activity": "Manufacture of other electrical equipment"
    },
    {
        "Section": "C",
        "Division": "27",
        "Group": "27.9",
        "Class": "27.90",
        "Activity": "Manufacture of other electrical equipment"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of machinery and equipment n.e.c."
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.1",
        "Class": null,
        "Activity": "Manufacture of general \u2014 purpose machinery"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.1",
        "Class": "28.11",
        "Activity": "Manufacture of engines and turbines, except aircraft, vehicle and cycle engines"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.1",
        "Class": "28.12",
        "Activity": "Manufacture of fluid power equipment"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.1",
        "Class": "28.13",
        "Activity": "Manufacture of other pumps and compressors"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.1",
        "Class": "28.14",
        "Activity": "Manufacture of other taps and valves"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.1",
        "Class": "28.15",
        "Activity": "Manufacture of bearings, gears, gearing and driving elements"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.2",
        "Class": null,
        "Activity": "Manufacture of other general-purpose machinery"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.2",
        "Class": "28.21",
        "Activity": "Manufacture of ovens, furnaces and furnace burners"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.2",
        "Class": "28.22",
        "Activity": "Manufacture of lifting and handling equipment"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.2",
        "Class": "28.23",
        "Activity": "Manufacture of office machinery and equipment (except computers and peripheral equipment)"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.2",
        "Class": "28.24",
        "Activity": "Manufacture of power-driven hand tools"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.2",
        "Class": "28.25",
        "Activity": "Manufacture of non-domestic cooling and ventilation equipment"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.2",
        "Class": "28.29",
        "Activity": "Manufacture of other general-purpose machinery n.e.c."
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.3",
        "Class": null,
        "Activity": "Manufacture of agricultural and forestry machinery"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.3",
        "Class": "28.30",
        "Activity": "Manufacture of agricultural and forestry machinery"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.4",
        "Class": null,
        "Activity": "Manufacture of metal forming machinery and machine tools"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.4",
        "Class": "28.41",
        "Activity": "Manufacture of metal forming machinery"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.4",
        "Class": "28.49",
        "Activity": "Manufacture of other machine tools"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.9",
        "Class": null,
        "Activity": "Manufacture of other special-purpose machinery"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.9",
        "Class": "28.91",
        "Activity": "Manufacture of machinery for metallurgy"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.9",
        "Class": "28.92",
        "Activity": "Manufacture of machinery for mining, quarrying and construction"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.9",
        "Class": "28.93",
        "Activity": "Manufacture of machinery for food, beverage and tobacco processing"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.9",
        "Class": "28.94",
        "Activity": "Manufacture of machinery for textile, apparel and leather production"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.9",
        "Class": "28.95",
        "Activity": "Manufacture of machinery for paper and paperboard production"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.9",
        "Class": "28.96",
        "Activity": "Manufacture of plastic and rubber machinery"
    },
    {
        "Section": "C",
        "Division": "28",
        "Group": "28.9",
        "Class": "28.99",
        "Activity": "Manufacture of other special-purpose machinery n.e.c."
    },
    {
        "Section": "C",
        "Division": "29",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of motor vehicles, trailers and semi-trailers"
    },
    {
        "Section": "C",
        "Division": "29",
        "Group": "29.1",
        "Class": null,
        "Activity": "Manufacture of motor vehicles"
    },
    {
        "Section": "C",
        "Division": "29",
        "Group": "29.1",
        "Class": "29.10",
        "Activity": "Manufacture of motor vehicles"
    },
    {
        "Section": "C",
        "Division": "29",
        "Group": "29.2",
        "Class": null,
        "Activity": "Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers"
    },
    {
        "Section": "C",
        "Division": "29",
        "Group": "29.2",
        "Class": "29.20",
        "Activity": "Manufacture of bodies (coachwork) for motor vehicles; manufacture of trailers and semi-trailers"
    },
    {
        "Section": "C",
        "Division": "29",
        "Group": "29.3",
        "Class": null,
        "Activity": "Manufacture of parts and accessories for motor vehicles"
    },
    {
        "Section": "C",
        "Division": "29",
        "Group": "29.3",
        "Class": "29.31",
        "Activity": "Manufacture of electrical and electronic equipment for motor vehicles"
    },
    {
        "Section": "C",
        "Division": "29",
        "Group": "29.3",
        "Class": "29.32",
        "Activity": "Manufacture of other parts and accessories for motor vehicles"
    },
    {
        "Section": "C",
        "Division": "30",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of other transport equipment"
    },
    {
        "Section": "C",
        "Division": "30",
        "Group": "30.1",
        "Class": null,
        "Activity": "Building of ships and boats"
    },
    {
        "Section": "C",
        "Division": "30",
        "Group": "30.1",
        "Class": "30.11",
        "Activity": "Building of ships and floating structures"
    },
    {
        "Section": "C",
        "Division": "30",
        "Group": "30.1",
        "Class": "30.12",
        "Activity": "Building of pleasure and sporting boats"
    },
    {
        "Section": "C",
        "Division": "30",
        "Group": "30.2",
        "Class": null,
        "Activity": "Manufacture of railway locomotives and rolling stock"
    },
    {
        "Section": "C",
        "Division": "30",
        "Group": "30.2",
        "Class": "30.20",
        "Activity": "Manufacture of railway locomotives and rolling stock"
    },
    {
        "Section": "C",
        "Division": "30",
        "Group": "30.3",
        "Class": null,
        "Activity": "Manufacture of air and spacecraft and related machinery"
    },
    {
        "Section": "C",
        "Division": "30",
        "Group": "30.3",
        "Class": "30.30",
        "Activity": "Manufacture of air and spacecraft and related machinery"
    },
    {
        "Section": "C",
        "Division": "30",
        "Group": "30.4",
        "Class": null,
        "Activity": "Manufacture of military fighting vehicles"
    },
    {
        "Section": "C",
        "Division": "30",
        "Group": "30.4",
        "Class": "30.40",
        "Activity": "Manufacture of military fighting vehicles"
    },
    {
        "Section": "C",
        "Division": "30",
        "Group": "30.9",
        "Class": null,
        "Activity": "Manufacture of transport equipment n.e.c."
    },
    {
        "Section": "C",
        "Division": "30",
        "Group": "30.9",
        "Class": "30.91",
        "Activity": "Manufacture of motorcycles"
    },
    {
        "Section": "C",
        "Division": "30",
        "Group": "30.9",
        "Class": "30.92",
        "Activity": "Manufacture of bicycles and invalid carriages"
    },
    {
        "Section": "C",
        "Division": "30",
        "Group": "30.9",
        "Class": "30.99",
        "Activity": "Manufacture of other transport equipment n.e.c."
    },
    {
        "Section": "C",
        "Division": "31",
        "Group": null,
        "Class": null,
        "Activity": "Manufacture of furniture"
    },
    {
        "Section": "C",
        "Division": "31",
        "Group": "31.0",
        "Class": null,
        "Activity": "Manufacture of furniture"
    },
    {
        "Section": "C",
        "Division": "31",
        "Group": "31.0",
        "Class": "31.01",
        "Activity": "Manufacture of office and shop furniture"
    },
    {
        "Section": "C",
        "Division": "31",
        "Group": "31.0",
        "Class": "31.02",
        "Activity": "Manufacture of kitchen furniture"
    },
    {
        "Section": "C",
        "Division": "31",
        "Group": "31.0",
        "Class": "31.03",
        "Activity": "Manufacture of mattresses"
    },
    {
        "Section": "C",
        "Division": "31",
        "Group": "31.0",
        "Class": "31.09",
        "Activity": "Manufacture of other furniture"
    },
    {
        "Section": "C",
        "Division": "32",
        "Group": null,
        "Class": null,
        "Activity": "Other manufacturing"
    },
    {
        "Section": "C",
        "Division": "32",
        "Group": "32.1",
        "Class": null,
        "Activity": "Manufacture of jewellery, bijouterie and related articles"
    },
    {
        "Section": "C",
        "Division": "32",
        "Group": "32.1",
        "Class": "32.11",
        "Activity": "Striking of coins"
    },
    {
        "Section": "C",
        "Division": "32",
        "Group": "32.1",
        "Class": "32.12",
        "Activity": "Manufacture of jewellery and related articles"
    },
    {
        "Section": "C",
        "Division": "32",
        "Group": "32.1",
        "Class": "32.13",
        "Activity": "Manufacture of imitation jewellery and related articles"
    },
    {
        "Section": "C",
        "Division": "32",
        "Group": "32.2",
        "Class": null,
        "Activity": "Manufacture of musical instruments"
    },
    {
        "Section": "C",
        "Division": "32",
        "Group": "32.2",
        "Class": "32.20",
        "Activity": "Manufacture of musical instruments"
    },
    {
        "Section": "C",
        "Division": "32",
        "Group": "32.3",
        "Class": null,
        "Activity": "Manufacture of sports goods"
    },
    {
        "Section": "C",
        "Division": "32",
        "Group": "32.3",
        "Class": "32.30",
        "Activity": "Manufacture of sports goods"
    },
    {
        "Section": "C",
        "Division": "32",
        "Group": "32.4",
        "Class": null,
        "Activity": "Manufacture of games and toys"
    },
    {
        "Section": "C",
        "Division": "32",
        "Group": "32.4",
        "Class": "32.40",
        "Activity": "Manufacture of games and toys"
    },
    {
        "Section": "C",
        "Division": "32",
        "Group": "32.5",
        "Class": null,
        "Activity": "Manufacture of medical and dental instruments and supplies"
    },
    {
        "Section": "C",
        "Division": "32",
        "Group": "32.5",
        "Class": "32.50",
        "Activity": "Manufacture of medical and dental instruments and supplies"
    },
    {
        "Section": "C",
        "Division": "32",
        "Group": "32.9",
        "Class": null,
        "Activity": "Manufacturing n.e.c."
    },
    {
        "Section": "C",
        "Division": "32",
        "Group": "32.9",
        "Class": "32.91",
        "Activity": "Manufacture of brooms and brushes"
    },
    {
        "Section": "C",
        "Division": "32",
        "Group": "32.9",
        "Class": "32.99",
        "Activity": "Other manufacturing n.e.c."
    },
    {
        "Section": "C",
        "Division": "33",
        "Group": null,
        "Class": null,
        "Activity": "Repair and installation of machinery and equipment"
    },
    {
        "Section": "C",
        "Division": "33",
        "Group": "33.1",
        "Class": null,
        "Activity": "Repair of fabricated metal products, machinery and equipment"
    },
    {
        "Section": "C",
        "Division": "33",
        "Group": "33.1",
        "Class": "33.11",
        "Activity": "Repair of fabricated metal products"
    },
    {
        "Section": "C",
        "Division": "33",
        "Group": "33.1",
        "Class": "33.12",
        "Activity": "Repair of machinery"
    },
    {
        "Section": "C",
        "Division": "33",
        "Group": "33.1",
        "Class": "33.13",
        "Activity": "Repair of electronic and optical equipment"
    },
    {
        "Section": "C",
        "Division": "33",
        "Group": "33.1",
        "Class": "33.14",
        "Activity": "Repair of electrical equipment"
    },
    {
        "Section": "C",
        "Division": "33",
        "Group": "33.1",
        "Class": "33.15",
        "Activity": "Repair and maintenance of ships and boats"
    },
    {
        "Section": "C",
        "Division": "33",
        "Group": "33.1",
        "Class": "33.16",
        "Activity": "Repair and maintenance of aircraft and spacecraft"
    },
    {
        "Section": "C",
        "Division": "33",
        "Group": "33.1",
        "Class": "33.17",
        "Activity": "Repair and maintenance of other transport equipment"
    },
    {
        "Section": "C",
        "Division": "33",
        "Group": "33.1",
        "Class": "33.19",
        "Activity": "Repair of other equipment"
    },
    {
        "Section": "C",
        "Division": "33",
        "Group": "33.2",
        "Class": null,
        "Activity": "Installation of industrial machinery and equipment"
    },
    {
        "Section": "C",
        "Division": "33",
        "Group": "33.2",
        "Class": "33.20",
        "Activity": "Installation of industrial machinery and equipment"
    },
    {
        "Section": "D",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Electricity, Gas, Steam And Air Conditioning Supply"
    },
    {
        "Section": "D",
        "Division": "35",
        "Group": null,
        "Class": null,
        "Activity": "Electricity, gas, steam and air conditioning supply"
    },
    {
        "Section": "D",
        "Division": "35",
        "Group": "35.1",
        "Class": null,
        "Activity": "Electric power generation, transmission and distribution"
    },
    {
        "Section": "D",
        "Division": "35",
        "Group": "35.1",
        "Class": "35.11",
        "Activity": "Production of electricity"
    },
    {
        "Section": "D",
        "Division": "35",
        "Group": "35.1",
        "Class": "35.12",
        "Activity": "Transmission of electricity"
    },
    {
        "Section": "D",
        "Division": "35",
        "Group": "35.1",
        "Class": "35.13",
        "Activity": "Distribution of electricity"
    },
    {
        "Section": "D",
        "Division": "35",
        "Group": "35.1",
        "Class": "35.14",
        "Activity": "Trade of electricity"
    },
    {
        "Section": "D",
        "Division": "35",
        "Group": "35.2",
        "Class": null,
        "Activity": "Manufacture of gas; distribution of gaseous fuels through mains"
    },
    {
        "Section": "D",
        "Division": "35",
        "Group": "35.2",
        "Class": "35.21",
        "Activity": "Manufacture of gas"
    },
    {
        "Section": "D",
        "Division": "35",
        "Group": "35.2",
        "Class": "35.22",
        "Activity": "Distribution of gaseous fuels through mains"
    },
    {
        "Section": "D",
        "Division": "35",
        "Group": "35.2",
        "Class": "35.23",
        "Activity": "Trade of gas through mains"
    },
    {
        "Section": "D",
        "Division": "35",
        "Group": "35.3",
        "Class": null,
        "Activity": "Steam and air conditioning supply"
    },
    {
        "Section": "D",
        "Division": "35",
        "Group": "35.3",
        "Class": "35.30",
        "Activity": "Steam and air conditioning supply"
    },
    {
        "Section": "E",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Water Supply; Sewerage, Waste Management And Remediation Activities"
    },
    {
        "Section": "E",
        "Division": "36",
        "Group": null,
        "Class": null,
        "Activity": "Water collection, treatment and supply"
    },
    {
        "Section": "E",
        "Division": "36",
        "Group": "36.0",
        "Class": null,
        "Activity": "Water collection, treatment and supply"
    },
    {
        "Section": "E",
        "Division": "36",
        "Group": "36.0",
        "Class": "36.00",
        "Activity": "Water collection, treatment and supply"
    },
    {
        "Section": "E",
        "Division": "37",
        "Group": null,
        "Class": null,
        "Activity": "Sewerage"
    },
    {
        "Section": "E",
        "Division": "37",
        "Group": "37.0",
        "Class": null,
        "Activity": "Sewerage"
    },
    {
        "Section": "E",
        "Division": "37",
        "Group": "37.0",
        "Class": "37.00",
        "Activity": "Sewerage"
    },
    {
        "Section": "E",
        "Division": "38",
        "Group": null,
        "Class": null,
        "Activity": "Waste collection, treatment and disposal activities; materials recovery"
    },
    {
        "Section": "E",
        "Division": "38",
        "Group": "38.1",
        "Class": null,
        "Activity": "Waste collection"
    },
    {
        "Section": "E",
        "Division": "38",
        "Group": "38.1",
        "Class": "38.11",
        "Activity": "Collection of non-hazardous waste"
    },
    {
        "Section": "E",
        "Division": "38",
        "Group": "38.1",
        "Class": "38.12",
        "Activity": "Collection of hazardous waste"
    },
    {
        "Section": "E",
        "Division": "38",
        "Group": "38.2",
        "Class": null,
        "Activity": "Waste treatment and disposal"
    },
    {
        "Section": "E",
        "Division": "38",
        "Group": "38.2",
        "Class": "38.21",
        "Activity": "Treatment and disposal of non-hazardous waste"
    },
    {
        "Section": "E",
        "Division": "38",
        "Group": "38.2",
        "Class": "38.22",
        "Activity": "Treatment and disposal of hazardous waste"
    },
    {
        "Section": "E",
        "Division": "38",
        "Group": "38.3",
        "Class": null,
        "Activity": "Materials recovery"
    },
    {
        "Section": "E",
        "Division": "38",
        "Group": "38.3",
        "Class": "38.31",
        "Activity": "Dismantling of wrecks"
    },
    {
        "Section": "E",
        "Division": "38",
        "Group": "38.3",
        "Class": "38.32",
        "Activity": "Recovery of sorted materials"
    },
    {
        "Section": "E",
        "Division": "39",
        "Group": null,
        "Class": null,
        "Activity": "Remediation activities and other waste management services"
    },
    {
        "Section": "E",
        "Division": "39",
        "Group": "39.0",
        "Class": null,
        "Activity": "Remediation activities and other waste management services"
    },
    {
        "Section": "E",
        "Division": "39",
        "Group": "39.0",
        "Class": "39.00",
        "Activity": "Remediation activities and other waste management services"
    },
    {
        "Section": "F",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Construction"
    },
    {
        "Section": "F",
        "Division": "41",
        "Group": null,
        "Class": null,
        "Activity": "Construction of buildings"
    },
    {
        "Section": "F",
        "Division": "41",
        "Group": "41.1",
        "Class": null,
        "Activity": "Development of building projects"
    },
    {
        "Section": "F",
        "Division": "41",
        "Group": "41.1",
        "Class": "41.10",
        "Activity": "Development of building projects"
    },
    {
        "Section": "F",
        "Division": "41",
        "Group": "41.2",
        "Class": null,
        "Activity": "Construction of residential and non-residential buildings"
    },
    {
        "Section": "F",
        "Division": "41",
        "Group": "41.2",
        "Class": "41.20",
        "Activity": "Construction of residential and non-residential buildings"
    },
    {
        "Section": "F",
        "Division": "42",
        "Group": null,
        "Class": null,
        "Activity": "Civil engineering"
    },
    {
        "Section": "F",
        "Division": "42",
        "Group": "42.1",
        "Class": null,
        "Activity": "Construction of roads and railways"
    },
    {
        "Section": "F",
        "Division": "42",
        "Group": "42.1",
        "Class": "42.11",
        "Activity": "Construction of roads and motorways"
    },
    {
        "Section": "F",
        "Division": "42",
        "Group": "42.1",
        "Class": "42.12",
        "Activity": "Construction of railways and underground railways"
    },
    {
        "Section": "F",
        "Division": "42",
        "Group": "42.1",
        "Class": "42.13",
        "Activity": "Construction of bridges and tunnels"
    },
    {
        "Section": "F",
        "Division": "42",
        "Group": "42.2",
        "Class": null,
        "Activity": "Construction of utility projects"
    },
    {
        "Section": "F",
        "Division": "42",
        "Group": "42.2",
        "Class": "42.21",
        "Activity": "Construction of utility projects for fluids"
    },
    {
        "Section": "F",
        "Division": "42",
        "Group": "42.2",
        "Class": "42.22",
        "Activity": "Construction of utility projects for electricity and telecommunications"
    },
    {
        "Section": "F",
        "Division": "42",
        "Group": "42.9",
        "Class": null,
        "Activity": "Construction of other civil engineering projects"
    },
    {
        "Section": "F",
        "Division": "42",
        "Group": "42.9",
        "Class": "42.91",
        "Activity": "Construction of water projects"
    },
    {
        "Section": "F",
        "Division": "42",
        "Group": "42.9",
        "Class": "42.99",
        "Activity": "Construction of other civil engineering projects n.e.c."
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": null,
        "Class": null,
        "Activity": "Specialised construction activities"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.1",
        "Class": null,
        "Activity": "Demolition and site preparation"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.1",
        "Class": "43.11",
        "Activity": "Demolition"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.1",
        "Class": "43.12",
        "Activity": "Site preparation"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.1",
        "Class": "43.13",
        "Activity": "Test drilling and boring"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.2",
        "Class": null,
        "Activity": "Electrical, plumbing and other construction installation activities"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.2",
        "Class": "43.21",
        "Activity": "Electrical installation"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.2",
        "Class": "43.22",
        "Activity": "Plumbing, heat and air conditioning installation"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.2",
        "Class": "43.29",
        "Activity": "Other construction installation"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.3",
        "Class": null,
        "Activity": "Building completion and finishing"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.3",
        "Class": "43.31",
        "Activity": "Plastering"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.3",
        "Class": "43.32",
        "Activity": "Joinery installation"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.3",
        "Class": "43.33",
        "Activity": "Floor and wall covering"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.3",
        "Class": "43.34",
        "Activity": "Painting and glazing"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.3",
        "Class": "43.39",
        "Activity": "Other building completion and finishing"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.9",
        "Class": null,
        "Activity": "Other specialised construction activities"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.9",
        "Class": "43.91",
        "Activity": "Roofing activities"
    },
    {
        "Section": "F",
        "Division": "43",
        "Group": "43.9",
        "Class": "43.99",
        "Activity": "Other specialised construction activities n.e.c."
    },
    {
        "Section": "G",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Wholesale And Retail Trade; Repair Of Motor Vehicles And Motorcycles"
    },
    {
        "Section": "G",
        "Division": "45",
        "Group": null,
        "Class": null,
        "Activity": "Wholesale and retail trade and repair of motor vehicles and motorcycles"
    },
    {
        "Section": "G",
        "Division": "45",
        "Group": "45.1",
        "Class": null,
        "Activity": "Sale of motor vehicles"
    },
    {
        "Section": "G",
        "Division": "45",
        "Group": "45.1",
        "Class": "45.11",
        "Activity": "Sale of cars and light motor vehicles"
    },
    {
        "Section": "G",
        "Division": "45",
        "Group": "45.1",
        "Class": "45.19",
        "Activity": "Sale of other motor vehicles"
    },
    {
        "Section": "G",
        "Division": "45",
        "Group": "45.2",
        "Class": null,
        "Activity": "Maintenance and repair of motor vehicles"
    },
    {
        "Section": "G",
        "Division": "45",
        "Group": "45.2",
        "Class": "45.20",
        "Activity": "Maintenance and repair of motor vehicles"
    },
    {
        "Section": "G",
        "Division": "45",
        "Group": "45.3",
        "Class": null,
        "Activity": "Sale of motor vehicle parts and accessories"
    },
    {
        "Section": "G",
        "Division": "45",
        "Group": "45.3",
        "Class": "45.31",
        "Activity": "Wholesale trade of motor vehicle parts and accessories"
    },
    {
        "Section": "G",
        "Division": "45",
        "Group": "45.3",
        "Class": "45.32",
        "Activity": "Retail trade of motor vehicle parts and accessories"
    },
    {
        "Section": "G",
        "Division": "45",
        "Group": "45.4",
        "Class": null,
        "Activity": "Sale, maintenance and repair of motorcycles and related parts and accessories"
    },
    {
        "Section": "G",
        "Division": "45",
        "Group": "45.4",
        "Class": "45.40",
        "Activity": "Sale, maintenance and repair of motorcycles and related parts and accessories"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": null,
        "Class": null,
        "Activity": "Wholesale trade, except of motor vehicles and motorcycles"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.1",
        "Class": null,
        "Activity": "Wholesale on a fee or contract basis"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.1",
        "Class": "46.11",
        "Activity": "Agents involved in the sale of agricultural raw materials, live animals, textile raw materials and semi-finished goods"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.1",
        "Class": "46.12",
        "Activity": "Agents involved in the sale of fuels, ores, metals and industrial chemicals"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.1",
        "Class": "46.13",
        "Activity": "Agents involved in the sale of timber and building materials"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.1",
        "Class": "46.14",
        "Activity": "Agents involved in the sale of machinery, industrial equipment, ships and aircraft"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.1",
        "Class": "46.15",
        "Activity": "Agents involved in the sale of furniture, household goods, hardware and ironmongery"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.1",
        "Class": "46.16",
        "Activity": "Agents involved in the sale of textiles, clothing, fur, footwear and leather goods"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.1",
        "Class": "46.17",
        "Activity": "Agents involved in the sale of food, beverages and tobacco"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.1",
        "Class": "46.18",
        "Activity": "Agents specialised in the sale of other particular products"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.1",
        "Class": "46.19",
        "Activity": "Agents involved in the sale of a variety of goods"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.2",
        "Class": null,
        "Activity": "Wholesale of agricultural raw materials and live animals"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.2",
        "Class": "46.21",
        "Activity": "Wholesale of grain, unmanufactured tobacco, seeds and animal feeds"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.2",
        "Class": "46.22",
        "Activity": "Wholesale of flowers and plants"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.2",
        "Class": "46.23",
        "Activity": "Wholesale of live animals"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.2",
        "Class": "46.24",
        "Activity": "Wholesale of hides, skins and leather"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.3",
        "Class": null,
        "Activity": "Wholesale of food, beverages and tobacco"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.3",
        "Class": "46.31",
        "Activity": "Wholesale of fruit and vegetables"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.3",
        "Class": "46.32",
        "Activity": "Wholesale of meat and meat products"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.3",
        "Class": "46.33",
        "Activity": "Wholesale of dairy products, eggs and edible oils and fats"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.3",
        "Class": "46.34",
        "Activity": "Wholesale of beverages"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.3",
        "Class": "46.35",
        "Activity": "Wholesale of tobacco products"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.3",
        "Class": "46.36",
        "Activity": "Wholesale of sugar and chocolate and sugar confectionery"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.3",
        "Class": "46.37",
        "Activity": "Wholesale of coffee, tea, cocoa and spices"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.3",
        "Class": "46.38",
        "Activity": "Wholesale of other food, including fish, crustaceans and molluscs"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.3",
        "Class": "46.39",
        "Activity": "Non-specialised wholesale of food, beverages and tobacco"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.4",
        "Class": null,
        "Activity": "Wholesale of household goods"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.4",
        "Class": "46.41",
        "Activity": "Wholesale of textiles"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.4",
        "Class": "46.42",
        "Activity": "Wholesale of clothing and footwear"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.4",
        "Class": "46.43",
        "Activity": "Wholesale of electrical household appliances"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.4",
        "Class": "46.44",
        "Activity": "Wholesale of china and glassware and cleaning materials"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.4",
        "Class": "46.45",
        "Activity": "Wholesale of perfume and cosmetics"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.4",
        "Class": "46.46",
        "Activity": "Wholesale of pharmaceutical goods"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.4",
        "Class": "46.47",
        "Activity": "Wholesale of furniture, carpets and lighting equipment"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.4",
        "Class": "46.48",
        "Activity": "Wholesale of watches and jewellery"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.4",
        "Class": "46.49",
        "Activity": "Wholesale of other household goods"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.5",
        "Class": null,
        "Activity": "Wholesale of information and communication equipment"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.5",
        "Class": "46.51",
        "Activity": "Wholesale of computers, computer peripheral equipment and software"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.5",
        "Class": "46.52",
        "Activity": "Wholesale of electronic and telecommunications equipment and parts"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.6",
        "Class": null,
        "Activity": "Wholesale of other machinery, equipment and supplies"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.6",
        "Class": "46.61",
        "Activity": "Wholesale of agricultural machinery, equipment and supplies"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.6",
        "Class": "46.62",
        "Activity": "Wholesale of machine tools"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.6",
        "Class": "46.63",
        "Activity": "Wholesale of mining, construction and civil engineering machinery"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.6",
        "Class": "46.64",
        "Activity": "Wholesale of machinery for the textile industry and of sewing and knitting machines"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.6",
        "Class": "46.65",
        "Activity": "Wholesale of office furniture"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.6",
        "Class": "46.66",
        "Activity": "Wholesale of other office machinery and equipment"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.6",
        "Class": "46.69",
        "Activity": "Wholesale of other machinery and equipment"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.7",
        "Class": null,
        "Activity": "Other specialised wholesale"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.7",
        "Class": "46.71",
        "Activity": "Wholesale of solid, liquid and gaseous fuels and related products"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.7",
        "Class": "46.72",
        "Activity": "Wholesale of metals and metal ores"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.7",
        "Class": "46.73",
        "Activity": "Wholesale of wood, construction materials and sanitary equipment"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.7",
        "Class": "46.74",
        "Activity": "Wholesale of hardware, plumbing and heating equipment and supplies"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.7",
        "Class": "46.75",
        "Activity": "Wholesale of chemical products"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.7",
        "Class": "46.76",
        "Activity": "Wholesale of other intermediate products"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.7",
        "Class": "46.77",
        "Activity": "Wholesale of waste and scrap"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.9",
        "Class": null,
        "Activity": "Non-specialised wholesale trade"
    },
    {
        "Section": "G",
        "Division": "46",
        "Group": "46.9",
        "Class": "46.90",
        "Activity": "Non-specialised wholesale trade"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": null,
        "Class": null,
        "Activity": "Retail trade, except of motor vehicles and motorcycles"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.1",
        "Class": null,
        "Activity": "Retail sale in non-specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.1",
        "Class": "47.11",
        "Activity": "Retail sale in non-specialised stores with food, beverages or tobacco predominating"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.1",
        "Class": "47.19",
        "Activity": "Other retail sale in non-specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.2",
        "Class": null,
        "Activity": "Retail sale of food, beverages and tobacco in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.2",
        "Class": "47.21",
        "Activity": "Retail sale of fruit and vegetables in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.2",
        "Class": "47.22",
        "Activity": "Retail sale of meat and meat products in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.2",
        "Class": "47.23",
        "Activity": "Retail sale of fish, crustaceans and molluscs in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.2",
        "Class": "47.24",
        "Activity": "Retail sale of bread, cakes, flour confectionery and sugar confectionery in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.2",
        "Class": "47.25",
        "Activity": "Retail sale of beverages in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.2",
        "Class": "47.26",
        "Activity": "Retail sale of tobacco products in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.2",
        "Class": "47.29",
        "Activity": "Other retail sale of food in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.3",
        "Class": null,
        "Activity": "Retail sale of automotive fuel in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.3",
        "Class": "47.30",
        "Activity": "Retail sale of automotive fuel in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.4",
        "Class": null,
        "Activity": "Retail sale of information and communication equipment in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.4",
        "Class": "47.41",
        "Activity": "Retail sale of computers, peripheral units and software in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.4",
        "Class": "47.42",
        "Activity": "Retail sale of telecommunications equipment in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.4",
        "Class": "47.43",
        "Activity": "Retail sale of audio and video equipment in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.5",
        "Class": null,
        "Activity": "Retail sale of other household equipment in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.5",
        "Class": "47.51",
        "Activity": "Retail sale of textiles in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.5",
        "Class": "47.52",
        "Activity": "Retail sale of hardware, paints and glass in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.5",
        "Class": "47.53",
        "Activity": "Retail sale of carpets, rugs, wall and floor coverings in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.5",
        "Class": "47.54",
        "Activity": "Retail sale of electrical household appliances in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.5",
        "Class": "47.59",
        "Activity": "Retail sale of furniture, lighting equipment and other household articles in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.6",
        "Class": null,
        "Activity": "Retail sale of cultural and recreation goods in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.6",
        "Class": "47.61",
        "Activity": "Retail sale of books in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.6",
        "Class": "47.62",
        "Activity": "Retail sale of newspapers and stationery in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.6",
        "Class": "47.63",
        "Activity": "Retail sale of music and video recordings in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.6",
        "Class": "47.64",
        "Activity": "Retail sale of sporting equipment in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.6",
        "Class": "47.65",
        "Activity": "Retail sale of games and toys in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.7",
        "Class": null,
        "Activity": "Retail sale of other goods in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.7",
        "Class": "47.71",
        "Activity": "Retail sale of clothing in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.7",
        "Class": "47.72",
        "Activity": "Retail sale of footwear and leather goods in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.7",
        "Class": "47.73",
        "Activity": "Dispensing chemist in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.7",
        "Class": "47.74",
        "Activity": "Retail sale of medical and orthopaedic goods in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.7",
        "Class": "47.75",
        "Activity": "Retail sale of cosmetic and toilet articles in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.7",
        "Class": "47.76",
        "Activity": "Retail sale of flowers, plants, seeds, fertilisers, pet animals and pet food in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.7",
        "Class": "47.77",
        "Activity": "Retail sale of watches and jewellery in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.7",
        "Class": "47.78",
        "Activity": "Other retail sale of new goods in specialised stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.7",
        "Class": "47.79",
        "Activity": "Retail sale of second-hand goods in stores"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.8",
        "Class": null,
        "Activity": "Retail sale via stalls and markets"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.8",
        "Class": "47.81",
        "Activity": "Retail sale via stalls and markets of food, beverages and tobacco products"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.8",
        "Class": "47.82",
        "Activity": "Retail sale via stalls and markets of textiles, clothing and footwear"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.8",
        "Class": "47.89",
        "Activity": "Retail sale via stalls and markets of other goods"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.9",
        "Class": null,
        "Activity": "Retail trade not in stores, stalls or markets"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.9",
        "Class": "47.91",
        "Activity": "Retail sale via mail order houses or via Internet"
    },
    {
        "Section": "G",
        "Division": "47",
        "Group": "47.9",
        "Class": "47.99",
        "Activity": "Other retail sale not in stores, stalls or markets"
    },
    {
        "Section": "H",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Transportation And Storage"
    },
    {
        "Section": "H",
        "Division": "49",
        "Group": null,
        "Class": null,
        "Activity": "Land transport and transport via pipelines"
    },
    {
        "Section": "H",
        "Division": "49",
        "Group": "49.1",
        "Class": null,
        "Activity": "Passenger rail transport, interurban"
    },
    {
        "Section": "H",
        "Division": "49",
        "Group": "49.1",
        "Class": "49.10",
        "Activity": "Passenger rail transport, interurban"
    },
    {
        "Section": "H",
        "Division": "49",
        "Group": "49.2",
        "Class": null,
        "Activity": "Freight rail transport"
    },
    {
        "Section": "H",
        "Division": "49",
        "Group": "49.2",
        "Class": "49.20",
        "Activity": "Freight rail transport"
    },
    {
        "Section": "H",
        "Division": "49",
        "Group": "49.3",
        "Class": null,
        "Activity": "Other passenger land transport"
    },
    {
        "Section": "H",
        "Division": "49",
        "Group": "49.3",
        "Class": "49.31",
        "Activity": "Urban and suburban passenger land transport"
    },
    {
        "Section": "H",
        "Division": "49",
        "Group": "49.3",
        "Class": "49.32",
        "Activity": "Taxi operation"
    },
    {
        "Section": "H",
        "Division": "49",
        "Group": "49.3",
        "Class": "49.39",
        "Activity": "Other passenger land transport n.e.c."
    },
    {
        "Section": "H",
        "Division": "49",
        "Group": "49.4",
        "Class": null,
        "Activity": "Freight transport by road and removal services"
    },
    {
        "Section": "H",
        "Division": "49",
        "Group": "49.4",
        "Class": "49.41",
        "Activity": "Freight transport by road"
    },
    {
        "Section": "H",
        "Division": "49",
        "Group": "49.4",
        "Class": "49.42",
        "Activity": "Removal services"
    },
    {
        "Section": "H",
        "Division": "49",
        "Group": "49.5",
        "Class": null,
        "Activity": "Transport via pipeline"
    },
    {
        "Section": "H",
        "Division": "49",
        "Group": "49.5",
        "Class": "49.50",
        "Activity": "Transport via pipeline"
    },
    {
        "Section": "H",
        "Division": "50",
        "Group": null,
        "Class": null,
        "Activity": "Water transport"
    },
    {
        "Section": "H",
        "Division": "50",
        "Group": "50.1",
        "Class": null,
        "Activity": "Sea and coastal passenger water transport"
    },
    {
        "Section": "H",
        "Division": "50",
        "Group": "50.1",
        "Class": "50.10",
        "Activity": "Sea and coastal passenger water transport"
    },
    {
        "Section": "H",
        "Division": "50",
        "Group": "50.2",
        "Class": null,
        "Activity": "Sea and coastal freight water transport"
    },
    {
        "Section": "H",
        "Division": "50",
        "Group": "50.2",
        "Class": "50.20",
        "Activity": "Sea and coastal freight water transport"
    },
    {
        "Section": "H",
        "Division": "50",
        "Group": "50.3",
        "Class": null,
        "Activity": "Inland passenger water transport"
    },
    {
        "Section": "H",
        "Division": "50",
        "Group": "50.3",
        "Class": "50.30",
        "Activity": "Inland passenger water transport"
    },
    {
        "Section": "H",
        "Division": "50",
        "Group": "50.4",
        "Class": null,
        "Activity": "Inland freight water transport"
    },
    {
        "Section": "H",
        "Division": "50",
        "Group": "50.4",
        "Class": "50.40",
        "Activity": "Inland freight water transport"
    },
    {
        "Section": "H",
        "Division": "51",
        "Group": null,
        "Class": null,
        "Activity": "Air transport"
    },
    {
        "Section": "H",
        "Division": "51",
        "Group": "51.1",
        "Class": null,
        "Activity": "Passenger air transport"
    },
    {
        "Section": "H",
        "Division": "51",
        "Group": "51.1",
        "Class": "51.10",
        "Activity": "Passenger air transport"
    },
    {
        "Section": "H",
        "Division": "51",
        "Group": "51.2",
        "Class": null,
        "Activity": "Freight air transport and space transport"
    },
    {
        "Section": "H",
        "Division": "51",
        "Group": "51.2",
        "Class": "51.21",
        "Activity": "Freight air transport"
    },
    {
        "Section": "H",
        "Division": "51",
        "Group": "51.2",
        "Class": "51.22",
        "Activity": "Space transport"
    },
    {
        "Section": "H",
        "Division": "52",
        "Group": null,
        "Class": null,
        "Activity": "Warehousing and support activities for transportation"
    },
    {
        "Section": "H",
        "Division": "52",
        "Group": "52.1",
        "Class": null,
        "Activity": "Warehousing and storage"
    },
    {
        "Section": "H",
        "Division": "52",
        "Group": "52.1",
        "Class": "52.10",
        "Activity": "Warehousing and storage"
    },
    {
        "Section": "H",
        "Division": "52",
        "Group": "52.2",
        "Class": null,
        "Activity": "Support activities for transportation"
    },
    {
        "Section": "H",
        "Division": "52",
        "Group": "52.2",
        "Class": "52.21",
        "Activity": "Service activities incidental to land transportation"
    },
    {
        "Section": "H",
        "Division": "52",
        "Group": "52.2",
        "Class": "52.22",
        "Activity": "Service activities incidental to water transportation"
    },
    {
        "Section": "H",
        "Division": "52",
        "Group": "52.2",
        "Class": "52.23",
        "Activity": "Service activities incidental to air transportation"
    },
    {
        "Section": "H",
        "Division": "52",
        "Group": "52.2",
        "Class": "52.24",
        "Activity": "Cargo handling"
    },
    {
        "Section": "H",
        "Division": "52",
        "Group": "52.2",
        "Class": "52.29",
        "Activity": "Other transportation support activities"
    },
    {
        "Section": "H",
        "Division": "53",
        "Group": null,
        "Class": null,
        "Activity": "Postal and courier activities"
    },
    {
        "Section": "H",
        "Division": "53",
        "Group": "53.1",
        "Class": null,
        "Activity": "Postal activities under universal service obligation"
    },
    {
        "Section": "H",
        "Division": "53",
        "Group": "53.1",
        "Class": "53.10",
        "Activity": "Postal activities under universal service obligation"
    },
    {
        "Section": "H",
        "Division": "53",
        "Group": "53.2",
        "Class": null,
        "Activity": "Other postal and courier activities"
    },
    {
        "Section": "H",
        "Division": "53",
        "Group": "53.2",
        "Class": "53.20",
        "Activity": "Other postal and courier activities"
    },
    {
        "Section": "I",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Accommodation And Food Service Activities"
    },
    {
        "Section": "I",
        "Division": "55",
        "Group": null,
        "Class": null,
        "Activity": "Accommodation"
    },
    {
        "Section": "I",
        "Division": "55",
        "Group": "55.1",
        "Class": null,
        "Activity": "Hotels and similar accommodation"
    },
    {
        "Section": "I",
        "Division": "55",
        "Group": "55.1",
        "Class": "55.10",
        "Activity": "Hotels and similar accommodation"
    },
    {
        "Section": "I",
        "Division": "55",
        "Group": "55.2",
        "Class": null,
        "Activity": "Holiday and other short-stay accommodation"
    },
    {
        "Section": "I",
        "Division": "55",
        "Group": "55.2",
        "Class": "55.20",
        "Activity": "Holiday and other short-stay accommodation"
    },
    {
        "Section": "I",
        "Division": "55",
        "Group": "55.3",
        "Class": null,
        "Activity": "Camping grounds, recreational vehicle parks and trailer parks"
    },
    {
        "Section": "I",
        "Division": "55",
        "Group": "55.3",
        "Class": "55.30",
        "Activity": "Camping grounds, recreational vehicle parks and trailer parks"
    },
    {
        "Section": "I",
        "Division": "55",
        "Group": "55.9",
        "Class": null,
        "Activity": "Other accommodation"
    },
    {
        "Section": "I",
        "Division": "55",
        "Group": "55.9",
        "Class": "55.90",
        "Activity": "Other accommodation"
    },
    {
        "Section": "I",
        "Division": "56",
        "Group": null,
        "Class": null,
        "Activity": "Food and beverage service activities"
    },
    {
        "Section": "I",
        "Division": "56",
        "Group": "56.1",
        "Class": null,
        "Activity": "Restaurants and mobile food service activities"
    },
    {
        "Section": "I",
        "Division": "56",
        "Group": "56.1",
        "Class": "56.10",
        "Activity": "Restaurants and mobile food service activities"
    },
    {
        "Section": "I",
        "Division": "56",
        "Group": "56.2",
        "Class": null,
        "Activity": "Event catering and other food service activities"
    },
    {
        "Section": "I",
        "Division": "56",
        "Group": "56.2",
        "Class": "56.21",
        "Activity": "Event catering activities"
    },
    {
        "Section": "I",
        "Division": "56",
        "Group": "56.2",
        "Class": "56.29",
        "Activity": "Other food service activities"
    },
    {
        "Section": "I",
        "Division": "56",
        "Group": "56.3",
        "Class": null,
        "Activity": "Beverage serving activities"
    },
    {
        "Section": "I",
        "Division": "56",
        "Group": "56.3",
        "Class": "56.30",
        "Activity": "Beverage serving activities"
    },
    {
        "Section": "J",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Information And Communication"
    },
    {
        "Section": "J",
        "Division": "58",
        "Group": null,
        "Class": null,
        "Activity": "Publishing activities"
    },
    {
        "Section": "J",
        "Division": "58",
        "Group": "58.1",
        "Class": null,
        "Activity": "Publishing of books, periodicals and other publishing activities"
    },
    {
        "Section": "J",
        "Division": "58",
        "Group": "58.1",
        "Class": "58.11",
        "Activity": "Book publishing"
    },
    {
        "Section": "J",
        "Division": "58",
        "Group": "58.1",
        "Class": "58.12",
        "Activity": "Publishing of directories and mailing lists"
    },
    {
        "Section": "J",
        "Division": "58",
        "Group": "58.1",
        "Class": "58.13",
        "Activity": "Publishing of newspapers"
    },
    {
        "Section": "J",
        "Division": "58",
        "Group": "58.1",
        "Class": "58.14",
        "Activity": "Publishing of journals and periodicals"
    },
    {
        "Section": "J",
        "Division": "58",
        "Group": "58.1",
        "Class": "58.19",
        "Activity": "Other publishing activities"
    },
    {
        "Section": "J",
        "Division": "58",
        "Group": "58.2",
        "Class": null,
        "Activity": "Software publishing"
    },
    {
        "Section": "J",
        "Division": "58",
        "Group": "58.2",
        "Class": "58.21",
        "Activity": "Publishing of computer games"
    },
    {
        "Section": "J",
        "Division": "58",
        "Group": "58.2",
        "Class": "58.29",
        "Activity": "Other software publishing"
    },
    {
        "Section": "J",
        "Division": "59",
        "Group": null,
        "Class": null,
        "Activity": "Motion picture, video and television programme production, sound recording and music publishing activities"
    },
    {
        "Section": "J",
        "Division": "59",
        "Group": "59.1",
        "Class": null,
        "Activity": "Motion picture, video and television programme activities"
    },
    {
        "Section": "J",
        "Division": "59",
        "Group": "59.1",
        "Class": "59.11",
        "Activity": "Motion picture, video and television programme production activities"
    },
    {
        "Section": "J",
        "Division": "59",
        "Group": "59.1",
        "Class": "59.12",
        "Activity": "Motion picture, video and television programme post-production activities"
    },
    {
        "Section": "J",
        "Division": "59",
        "Group": "59.1",
        "Class": "59.13",
        "Activity": "Motion picture, video and television programme distribution activities"
    },
    {
        "Section": "J",
        "Division": "59",
        "Group": "59.1",
        "Class": "59.14",
        "Activity": "Motion picture projection activities"
    },
    {
        "Section": "J",
        "Division": "59",
        "Group": "59.2",
        "Class": null,
        "Activity": "Sound recording and music publishing activities"
    },
    {
        "Section": "J",
        "Division": "59",
        "Group": "59.2",
        "Class": "59.20",
        "Activity": "Sound recording and music publishing activities"
    },
    {
        "Section": "J",
        "Division": "60",
        "Group": null,
        "Class": null,
        "Activity": "Programming and broadcasting activities"
    },
    {
        "Section": "J",
        "Division": "60",
        "Group": "60.1",
        "Class": null,
        "Activity": "Radio broadcasting"
    },
    {
        "Section": "J",
        "Division": "60",
        "Group": "60.1",
        "Class": "60.10",
        "Activity": "Radio broadcasting"
    },
    {
        "Section": "J",
        "Division": "60",
        "Group": "60.2",
        "Class": null,
        "Activity": "Television programming and broadcasting activities"
    },
    {
        "Section": "J",
        "Division": "60",
        "Group": "60.2",
        "Class": "60.20",
        "Activity": "Television programming and broadcasting activities"
    },
    {
        "Section": "J",
        "Division": "61",
        "Group": null,
        "Class": null,
        "Activity": "Telecommunications"
    },
    {
        "Section": "J",
        "Division": "61",
        "Group": "61.1",
        "Class": null,
        "Activity": "Wired telecommunications activities"
    },
    {
        "Section": "J",
        "Division": "61",
        "Group": "61.1",
        "Class": "61.10",
        "Activity": "Wired telecommunications activities"
    },
    {
        "Section": "J",
        "Division": "61",
        "Group": "61.2",
        "Class": null,
        "Activity": "Wireless telecommunications activities"
    },
    {
        "Section": "J",
        "Division": "61",
        "Group": "61.2",
        "Class": "61.20",
        "Activity": "Wireless telecommunications activities"
    },
    {
        "Section": "J",
        "Division": "61",
        "Group": "61.3",
        "Class": null,
        "Activity": "Satellite telecommunications activities"
    },
    {
        "Section": "J",
        "Division": "61",
        "Group": "61.3",
        "Class": "61.30",
        "Activity": "Satellite telecommunications activities"
    },
    {
        "Section": "J",
        "Division": "61",
        "Group": "61.9",
        "Class": null,
        "Activity": "Other telecommunications activities"
    },
    {
        "Section": "J",
        "Division": "61",
        "Group": "61.9",
        "Class": "61.90",
        "Activity": "Other telecommunications activities"
    },
    {
        "Section": "J",
        "Division": "62",
        "Group": null,
        "Class": null,
        "Activity": "Computer programming, consultancy and related activities"
    },
    {
        "Section": "J",
        "Division": "62",
        "Group": "62.0",
        "Class": null,
        "Activity": "Computer programming, consultancy and related activities"
    },
    {
        "Section": "J",
        "Division": "62",
        "Group": "62.0",
        "Class": "62.01",
        "Activity": "Computer programming activities"
    },
    {
        "Section": "J",
        "Division": "62",
        "Group": "62.0",
        "Class": "62.02",
        "Activity": "Computer consultancy activities"
    },
    {
        "Section": "J",
        "Division": "62",
        "Group": "62.0",
        "Class": "62.03",
        "Activity": "Computer facilities management activities"
    },
    {
        "Section": "J",
        "Division": "62",
        "Group": "62.0",
        "Class": "62.09",
        "Activity": "Other information technology and computer service activities"
    },
    {
        "Section": "J",
        "Division": "63",
        "Group": null,
        "Class": null,
        "Activity": "Information service activities"
    },
    {
        "Section": "J",
        "Division": "63",
        "Group": "63.1",
        "Class": null,
        "Activity": "Data processing, hosting and related activities; web portals"
    },
    {
        "Section": "J",
        "Division": "63",
        "Group": "63.1",
        "Class": "63.11",
        "Activity": "Data processing, hosting and related activities"
    },
    {
        "Section": "J",
        "Division": "63",
        "Group": "63.1",
        "Class": "63.12",
        "Activity": "Web portals"
    },
    {
        "Section": "J",
        "Division": "63",
        "Group": "63.9",
        "Class": null,
        "Activity": "Other information service activities"
    },
    {
        "Section": "J",
        "Division": "63",
        "Group": "63.9",
        "Class": "63.91",
        "Activity": "News agency activities"
    },
    {
        "Section": "J",
        "Division": "63",
        "Group": "63.9",
        "Class": "63.99",
        "Activity": "Other information service activities n.e.c."
    },
    {
        "Section": "K",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Financial And Insurance Activities"
    },
    {
        "Section": "K",
        "Division": "64",
        "Group": null,
        "Class": null,
        "Activity": "Financial service activities, except insurance and pension funding"
    },
    {
        "Section": "K",
        "Division": "64",
        "Group": "64.1",
        "Class": null,
        "Activity": "Monetary intermediation"
    },
    {
        "Section": "K",
        "Division": "64",
        "Group": "64.1",
        "Class": "64.11",
        "Activity": "Central banking"
    },
    {
        "Section": "K",
        "Division": "64",
        "Group": "64.1",
        "Class": "64.19",
        "Activity": "Other monetary intermediation"
    },
    {
        "Section": "K",
        "Division": "64",
        "Group": "64.2",
        "Class": null,
        "Activity": "Activities of holding companies"
    },
    {
        "Section": "K",
        "Division": "64",
        "Group": "64.2",
        "Class": "64.20",
        "Activity": "Activities of holding companies"
    },
    {
        "Section": "K",
        "Division": "64",
        "Group": "64.3",
        "Class": null,
        "Activity": "Trusts, funds and similar financial entities"
    },
    {
        "Section": "K",
        "Division": "64",
        "Group": "64.3",
        "Class": "64.30",
        "Activity": "Trusts, funds and similar financial entities"
    },
    {
        "Section": "K",
        "Division": "64",
        "Group": "64.9",
        "Class": null,
        "Activity": "Other financial service activities, except insurance and pension funding"
    },
    {
        "Section": "K",
        "Division": "64",
        "Group": "64.9",
        "Class": "64.91",
        "Activity": "Financial leasing"
    },
    {
        "Section": "K",
        "Division": "64",
        "Group": "64.9",
        "Class": "64.92",
        "Activity": "Other credit granting"
    },
    {
        "Section": "K",
        "Division": "64",
        "Group": "64.9",
        "Class": "64.99",
        "Activity": "Other financial service activities, except insurance and pension funding n.e.c."
    },
    {
        "Section": "K",
        "Division": "65",
        "Group": null,
        "Class": null,
        "Activity": "Insurance, reinsurance and pension funding, except compulsory social security"
    },
    {
        "Section": "K",
        "Division": "65",
        "Group": "65.1",
        "Class": null,
        "Activity": "Insurance"
    },
    {
        "Section": "K",
        "Division": "65",
        "Group": "65.1",
        "Class": "65.11",
        "Activity": "Life insurance"
    },
    {
        "Section": "K",
        "Division": "65",
        "Group": "65.1",
        "Class": "65.12",
        "Activity": "Non-life insurance"
    },
    {
        "Section": "K",
        "Division": "65",
        "Group": "65.2",
        "Class": null,
        "Activity": "Reinsurance"
    },
    {
        "Section": "K",
        "Division": "65",
        "Group": "65.2",
        "Class": "65.20",
        "Activity": "Reinsurance"
    },
    {
        "Section": "K",
        "Division": "65",
        "Group": "65.3",
        "Class": null,
        "Activity": "Pension funding"
    },
    {
        "Section": "K",
        "Division": "65",
        "Group": "65.3",
        "Class": "65.30",
        "Activity": "Pension funding"
    },
    {
        "Section": "K",
        "Division": "66",
        "Group": null,
        "Class": null,
        "Activity": "Activities auxiliary to financial services and insurance activities"
    },
    {
        "Section": "K",
        "Division": "66",
        "Group": "66.1",
        "Class": null,
        "Activity": "Activities auxiliary to financial services, except insurance and pension funding"
    },
    {
        "Section": "K",
        "Division": "66",
        "Group": "66.1",
        "Class": "66.11",
        "Activity": "Administration of financial markets"
    },
    {
        "Section": "K",
        "Division": "66",
        "Group": "66.1",
        "Class": "66.12",
        "Activity": "Security and commodity contracts brokerage"
    },
    {
        "Section": "K",
        "Division": "66",
        "Group": "66.1",
        "Class": "66.19",
        "Activity": "Other activities auxiliary to financial services, except insurance and pension funding"
    },
    {
        "Section": "K",
        "Division": "66",
        "Group": "66.2",
        "Class": null,
        "Activity": "Activities auxiliary to insurance and pension funding"
    },
    {
        "Section": "K",
        "Division": "66",
        "Group": "66.2",
        "Class": "66.21",
        "Activity": "Risk and damage evaluation"
    },
    {
        "Section": "K",
        "Division": "66",
        "Group": "66.2",
        "Class": "66.22",
        "Activity": "Activities of insurance agents and brokers"
    },
    {
        "Section": "K",
        "Division": "66",
        "Group": "66.2",
        "Class": "66.29",
        "Activity": "Other activities auxiliary to insurance and pension funding"
    },
    {
        "Section": "K",
        "Division": "66",
        "Group": "66.3",
        "Class": null,
        "Activity": "Fund management activities"
    },
    {
        "Section": "K",
        "Division": "66",
        "Group": "66.3",
        "Class": "66.30",
        "Activity": "Fund management activities"
    },
    {
        "Section": "L",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Real Estate Activities"
    },
    {
        "Section": "L",
        "Division": "68",
        "Group": null,
        "Class": null,
        "Activity": "Real estate activities"
    },
    {
        "Section": "L",
        "Division": "68",
        "Group": "68.1",
        "Class": null,
        "Activity": "Buying and selling of own real estate"
    },
    {
        "Section": "L",
        "Division": "68",
        "Group": "68.1",
        "Class": "68.10",
        "Activity": "Buying and selling of own real estate"
    },
    {
        "Section": "L",
        "Division": "68",
        "Group": "68.2",
        "Class": null,
        "Activity": "Renting and operating of own or leased real estate"
    },
    {
        "Section": "L",
        "Division": "68",
        "Group": "68.2",
        "Class": "68.20",
        "Activity": "Renting and operating of own or leased real estate"
    },
    {
        "Section": "L",
        "Division": "68",
        "Group": "68.3",
        "Class": null,
        "Activity": "Real estate activities on a fee or contract basis"
    },
    {
        "Section": "L",
        "Division": "68",
        "Group": "68.3",
        "Class": "68.31",
        "Activity": "Real estate agencies"
    },
    {
        "Section": "L",
        "Division": "68",
        "Group": "68.3",
        "Class": "68.32",
        "Activity": "Management of real estate on a fee or contract basis"
    },
    {
        "Section": "M",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Professional, Scientific And Technical Activities"
    },
    {
        "Section": "M",
        "Division": "69",
        "Group": null,
        "Class": null,
        "Activity": "Legal and accounting activities"
    },
    {
        "Section": "M",
        "Division": "69",
        "Group": "69.1",
        "Class": null,
        "Activity": "Legal activities"
    },
    {
        "Section": "M",
        "Division": "69",
        "Group": "69.1",
        "Class": "69.10",
        "Activity": "Legal activities"
    },
    {
        "Section": "M",
        "Division": "69",
        "Group": "69.2",
        "Class": null,
        "Activity": "Accounting, bookkeeping and auditing activities; tax consultancy"
    },
    {
        "Section": "M",
        "Division": "69",
        "Group": "69.2",
        "Class": "69.20",
        "Activity": "Accounting, bookkeeping and auditing activities; tax consultancy"
    },
    {
        "Section": "M",
        "Division": "70",
        "Group": null,
        "Class": null,
        "Activity": "Activities of head offices; management consultancy activities"
    },
    {
        "Section": "M",
        "Division": "70",
        "Group": "70.1",
        "Class": null,
        "Activity": "Activities of head offices"
    },
    {
        "Section": "M",
        "Division": "70",
        "Group": "70.1",
        "Class": "70.10",
        "Activity": "Activities of head offices"
    },
    {
        "Section": "M",
        "Division": "70",
        "Group": "70.2",
        "Class": null,
        "Activity": "Management consultancy activities"
    },
    {
        "Section": "M",
        "Division": "70",
        "Group": "70.2",
        "Class": "70.21",
        "Activity": "Public relations and communication activities"
    },
    {
        "Section": "M",
        "Division": "70",
        "Group": "70.2",
        "Class": "70.22",
        "Activity": "Business and other management consultancy activities"
    },
    {
        "Section": "M",
        "Division": "71",
        "Group": null,
        "Class": null,
        "Activity": "Architectural and engineering activities; technical testing and analysis"
    },
    {
        "Section": "M",
        "Division": "71",
        "Group": "71.1",
        "Class": null,
        "Activity": "Architectural and engineering activities and related technical consultancy"
    },
    {
        "Section": "M",
        "Division": "71",
        "Group": "71.1",
        "Class": "71.11",
        "Activity": "Architectural activities"
    },
    {
        "Section": "M",
        "Division": "71",
        "Group": "71.1",
        "Class": "71.12",
        "Activity": "Engineering activities and related technical consultancy"
    },
    {
        "Section": "M",
        "Division": "71",
        "Group": "71.2",
        "Class": null,
        "Activity": "Technical testing and analysis"
    },
    {
        "Section": "M",
        "Division": "71",
        "Group": "71.2",
        "Class": "71.20",
        "Activity": "Technical testing and analysis"
    },
    {
        "Section": "M",
        "Division": "72",
        "Group": null,
        "Class": null,
        "Activity": "Scientific research and development"
    },
    {
        "Section": "M",
        "Division": "72",
        "Group": "72.1",
        "Class": null,
        "Activity": "Research and experimental development on natural sciences and engineering"
    },
    {
        "Section": "M",
        "Division": "72",
        "Group": "72.1",
        "Class": "72.11",
        "Activity": "Research and experimental development on biotechnology"
    },
    {
        "Section": "M",
        "Division": "72",
        "Group": "72.1",
        "Class": "72.19",
        "Activity": "Other research and experimental development on natural sciences and engineering"
    },
    {
        "Section": "M",
        "Division": "72",
        "Group": "72.2",
        "Class": null,
        "Activity": "Research and experimental development on social sciences and humanities"
    },
    {
        "Section": "M",
        "Division": "72",
        "Group": "72.2",
        "Class": "72.20",
        "Activity": "Research and experimental development on social sciences and humanities"
    },
    {
        "Section": "M",
        "Division": "73",
        "Group": null,
        "Class": null,
        "Activity": "Advertising and market research"
    },
    {
        "Section": "M",
        "Division": "73",
        "Group": "73.1",
        "Class": null,
        "Activity": "Advertising"
    },
    {
        "Section": "M",
        "Division": "73",
        "Group": "73.1",
        "Class": "73.11",
        "Activity": "Advertising agencies"
    },
    {
        "Section": "M",
        "Division": "73",
        "Group": "73.1",
        "Class": "73.12",
        "Activity": "Media representation"
    },
    {
        "Section": "M",
        "Division": "73",
        "Group": "73.2",
        "Class": null,
        "Activity": "Market research and public opinion polling"
    },
    {
        "Section": "M",
        "Division": "73",
        "Group": "73.2",
        "Class": "73.20",
        "Activity": "Market research and public opinion polling"
    },
    {
        "Section": "M",
        "Division": "74",
        "Group": null,
        "Class": null,
        "Activity": "Other professional, scientific and technical activities"
    },
    {
        "Section": "M",
        "Division": "74",
        "Group": "74.1",
        "Class": null,
        "Activity": "Specialised design activities"
    },
    {
        "Section": "M",
        "Division": "74",
        "Group": "74.1",
        "Class": "74.10",
        "Activity": "Specialised design activities"
    },
    {
        "Section": "M",
        "Division": "74",
        "Group": "74.2",
        "Class": null,
        "Activity": "Photographic activities"
    },
    {
        "Section": "M",
        "Division": "74",
        "Group": "74.2",
        "Class": "74.20",
        "Activity": "Photographic activities"
    },
    {
        "Section": "M",
        "Division": "74",
        "Group": "74.3",
        "Class": null,
        "Activity": "Translation and interpretation activities"
    },
    {
        "Section": "M",
        "Division": "74",
        "Group": "74.3",
        "Class": "74.30",
        "Activity": "Translation and interpretation activities"
    },
    {
        "Section": "M",
        "Division": "74",
        "Group": "74.9",
        "Class": null,
        "Activity": "Other professional, scientific and technical activities n.e.c."
    },
    {
        "Section": "M",
        "Division": "74",
        "Group": "74.9",
        "Class": "74.90",
        "Activity": "Other professional, scientific and technical activities n.e.c."
    },
    {
        "Section": "M",
        "Division": "75",
        "Group": null,
        "Class": null,
        "Activity": "Veterinary activities"
    },
    {
        "Section": "M",
        "Division": "75",
        "Group": "75.0",
        "Class": null,
        "Activity": "Veterinary activities"
    },
    {
        "Section": "M",
        "Division": "75",
        "Group": "75.0",
        "Class": "75.00",
        "Activity": "Veterinary activities"
    },
    {
        "Section": "N",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Administrative And Support Service Activities"
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": null,
        "Class": null,
        "Activity": "Rental and leasing activities"
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": "77.1",
        "Class": null,
        "Activity": "Renting and leasing of motor vehicles"
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": "77.1",
        "Class": "77.11",
        "Activity": "Renting and leasing of cars and light motor vehicles"
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": "77.1",
        "Class": "77.12",
        "Activity": "Renting and leasing of trucks"
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": "77.2",
        "Class": null,
        "Activity": "Renting and leasing of personal and household goods"
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": "77.2",
        "Class": "77.21",
        "Activity": "Renting and leasing of recreational and sports goods"
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": "77.2",
        "Class": "77.22",
        "Activity": "Renting of video tapes and disks"
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": "77.2",
        "Class": "77.29",
        "Activity": "Renting and leasing of other personal and household goods"
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": "77.3",
        "Class": null,
        "Activity": "Renting and leasing of other machinery, equipment and tangible goods"
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": "77.3",
        "Class": "77.31",
        "Activity": "Renting and leasing of agricultural machinery and equipment"
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": "77.3",
        "Class": "77.32",
        "Activity": "Renting and leasing of construction and civil engineering machinery and equipment"
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": "77.3",
        "Class": "77.33",
        "Activity": "Renting and leasing of office machinery and equipment (including computers)"
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": "77.3",
        "Class": "77.34",
        "Activity": "Renting and leasing of water transport equipment"
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": "77.3",
        "Class": "77.35",
        "Activity": "Renting and leasing of air transport equipment"
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": "77.3",
        "Class": "77.39",
        "Activity": "Renting and leasing of other machinery, equipment and tangible goods n.e.c."
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": "77.4",
        "Class": null,
        "Activity": "Leasing of intellectual property and similar products, except copy-righted works"
    },
    {
        "Section": "N",
        "Division": "77",
        "Group": "77.4",
        "Class": "77.40",
        "Activity": "Leasing of intellectual property and similar products, except copy-righted works"
    },
    {
        "Section": "N",
        "Division": "78",
        "Group": null,
        "Class": null,
        "Activity": "Employment activities"
    },
    {
        "Section": "N",
        "Division": "78",
        "Group": "78.1",
        "Class": null,
        "Activity": "Activities of employment placement agencies"
    },
    {
        "Section": "N",
        "Division": "78",
        "Group": "78.1",
        "Class": "78.10",
        "Activity": "Activities of employment placement agencies"
    },
    {
        "Section": "N",
        "Division": "78",
        "Group": "78.2",
        "Class": null,
        "Activity": "Temporary employment agency activities"
    },
    {
        "Section": "N",
        "Division": "78",
        "Group": "78.2",
        "Class": "78.20",
        "Activity": "Temporary employment agency activities"
    },
    {
        "Section": "N",
        "Division": "78",
        "Group": "78.3",
        "Class": null,
        "Activity": "Other human resources provision"
    },
    {
        "Section": "N",
        "Division": "78",
        "Group": "78.3",
        "Class": "78.30",
        "Activity": "Other human resources provision"
    },
    {
        "Section": "N",
        "Division": "79",
        "Group": null,
        "Class": null,
        "Activity": "Travel agency, tour operator reservation service and related activities"
    },
    {
        "Section": "N",
        "Division": "79",
        "Group": "79.1",
        "Class": null,
        "Activity": "Travel agency and tour operator activities"
    },
    {
        "Section": "N",
        "Division": "79",
        "Group": "79.1",
        "Class": "79.11",
        "Activity": "Travel agency activities"
    },
    {
        "Section": "N",
        "Division": "79",
        "Group": "79.1",
        "Class": "79.12",
        "Activity": "Tour operator activities"
    },
    {
        "Section": "N",
        "Division": "79",
        "Group": "79.9",
        "Class": null,
        "Activity": "Other reservation service and related activities"
    },
    {
        "Section": "N",
        "Division": "79",
        "Group": "79.9",
        "Class": "79.90",
        "Activity": "Other reservation service and related activities"
    },
    {
        "Section": "N",
        "Division": "80",
        "Group": null,
        "Class": null,
        "Activity": "Security and investigation activities"
    },
    {
        "Section": "N",
        "Division": "80",
        "Group": "80.1",
        "Class": null,
        "Activity": "Private security activities"
    },
    {
        "Section": "N",
        "Division": "80",
        "Group": "80.1",
        "Class": "80.10",
        "Activity": "Private security activities"
    },
    {
        "Section": "N",
        "Division": "80",
        "Group": "80.2",
        "Class": null,
        "Activity": "Security systems service activities"
    },
    {
        "Section": "N",
        "Division": "80",
        "Group": "80.2",
        "Class": "80.20",
        "Activity": "Security systems service activities"
    },
    {
        "Section": "N",
        "Division": "80",
        "Group": "80.3",
        "Class": null,
        "Activity": "Investigation activities"
    },
    {
        "Section": "N",
        "Division": "80",
        "Group": "80.3",
        "Class": "80.30",
        "Activity": "Investigation activities"
    },
    {
        "Section": "N",
        "Division": "81",
        "Group": null,
        "Class": null,
        "Activity": "Services to buildings and landscape activities"
    },
    {
        "Section": "N",
        "Division": "81",
        "Group": "81.1",
        "Class": null,
        "Activity": "Combined facilities support activities"
    },
    {
        "Section": "N",
        "Division": "81",
        "Group": "81.1",
        "Class": "81.10",
        "Activity": "Combined facilities support activities"
    },
    {
        "Section": "N",
        "Division": "81",
        "Group": "81.2",
        "Class": null,
        "Activity": "Cleaning activities"
    },
    {
        "Section": "N",
        "Division": "81",
        "Group": "81.2",
        "Class": "81.21",
        "Activity": "General cleaning of buildings"
    },
    {
        "Section": "N",
        "Division": "81",
        "Group": "81.2",
        "Class": "81.22",
        "Activity": "Other building and industrial cleaning activities"
    },
    {
        "Section": "N",
        "Division": "81",
        "Group": "81.2",
        "Class": "81.29",
        "Activity": "Other cleaning activities"
    },
    {
        "Section": "N",
        "Division": "81",
        "Group": "81.3",
        "Class": null,
        "Activity": "Landscape service activities"
    },
    {
        "Section": "N",
        "Division": "81",
        "Group": "81.3",
        "Class": "81.30",
        "Activity": "Landscape service activities"
    },
    {
        "Section": "N",
        "Division": "82",
        "Group": null,
        "Class": null,
        "Activity": "Office administrative, office support and other business support activities"
    },
    {
        "Section": "N",
        "Division": "82",
        "Group": "82.1",
        "Class": null,
        "Activity": "Office administrative and support activities"
    },
    {
        "Section": "N",
        "Division": "82",
        "Group": "82.1",
        "Class": "82.11",
        "Activity": "Combined office administrative service activities"
    },
    {
        "Section": "N",
        "Division": "82",
        "Group": "82.1",
        "Class": "82.19",
        "Activity": "Photocopying, document preparation and other specialised office support activities"
    },
    {
        "Section": "N",
        "Division": "82",
        "Group": "82.2",
        "Class": null,
        "Activity": "Activities of call centres"
    },
    {
        "Section": "N",
        "Division": "82",
        "Group": "82.2",
        "Class": "82.20",
        "Activity": "Activities of call centres"
    },
    {
        "Section": "N",
        "Division": "82",
        "Group": "82.3",
        "Class": null,
        "Activity": "Organisation of conventions and trade shows"
    },
    {
        "Section": "N",
        "Division": "82",
        "Group": "82.3",
        "Class": "82.30",
        "Activity": "Organisation of conventions and trade shows"
    },
    {
        "Section": "N",
        "Division": "82",
        "Group": "82.9",
        "Class": null,
        "Activity": "Business support service activities n.e.c."
    },
    {
        "Section": "N",
        "Division": "82",
        "Group": "82.9",
        "Class": "82.91",
        "Activity": "Activities of collection agencies and credit bureaus"
    },
    {
        "Section": "N",
        "Division": "82",
        "Group": "82.9",
        "Class": "82.92",
        "Activity": "Packaging activities"
    },
    {
        "Section": "N",
        "Division": "82",
        "Group": "82.9",
        "Class": "82.99",
        "Activity": "Other business support service activities n.e.c."
    },
    {
        "Section": "O",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Public Administration And Defence; Compulsory Social Security"
    },
    {
        "Section": "O",
        "Division": "84",
        "Group": null,
        "Class": null,
        "Activity": "Public administration and defence; compulsory social security"
    },
    {
        "Section": "O",
        "Division": "84",
        "Group": "84.1",
        "Class": null,
        "Activity": "Administration of the State and the economic and social policy of the community"
    },
    {
        "Section": "O",
        "Division": "84",
        "Group": "84.1",
        "Class": "84.11",
        "Activity": "General public administration activities"
    },
    {
        "Section": "O",
        "Division": "84",
        "Group": "84.1",
        "Class": "84.12",
        "Activity": "Regulation of the activities of providing health care, education, cultural services and other social services, excluding social security"
    },
    {
        "Section": "O",
        "Division": "84",
        "Group": "84.1",
        "Class": "84.13",
        "Activity": "Regulation of and contribution to more efficient operation of businesses"
    },
    {
        "Section": "O",
        "Division": "84",
        "Group": "84.2",
        "Class": null,
        "Activity": "Provision of services to the community as a whole"
    },
    {
        "Section": "O",
        "Division": "84",
        "Group": "84.2",
        "Class": "84.21",
        "Activity": "Foreign affairs"
    },
    {
        "Section": "O",
        "Division": "84",
        "Group": "84.2",
        "Class": "84.22",
        "Activity": "Defence activities"
    },
    {
        "Section": "O",
        "Division": "84",
        "Group": "84.2",
        "Class": "84.23",
        "Activity": "Justice and judicial activities"
    },
    {
        "Section": "O",
        "Division": "84",
        "Group": "84.2",
        "Class": "84.24",
        "Activity": "Public order and safety activities"
    },
    {
        "Section": "O",
        "Division": "84",
        "Group": "84.2",
        "Class": "84.25",
        "Activity": "Fire service activities"
    },
    {
        "Section": "O",
        "Division": "84",
        "Group": "84.3",
        "Class": null,
        "Activity": "Compulsory social security activities"
    },
    {
        "Section": "O",
        "Division": "84",
        "Group": "84.3",
        "Class": "84.30",
        "Activity": "Compulsory social security activities"
    },
    {
        "Section": "P",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Education"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": null,
        "Class": null,
        "Activity": "Education"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.1",
        "Class": null,
        "Activity": "Pre-primary education"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.1",
        "Class": "85.10",
        "Activity": "Pre-primary education"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.2",
        "Class": null,
        "Activity": "Primary education"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.2",
        "Class": "85.20",
        "Activity": "Primary education"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.3",
        "Class": null,
        "Activity": "Secondary education"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.3",
        "Class": "85.31",
        "Activity": "General secondary education"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.3",
        "Class": "85.32",
        "Activity": "Technical and vocational secondary education"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.4",
        "Class": null,
        "Activity": "Higher education"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.4",
        "Class": "85.41",
        "Activity": "Post-secondary non-tertiary education"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.4",
        "Class": "85.42",
        "Activity": "Tertiary education"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.5",
        "Class": null,
        "Activity": "Other education"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.5",
        "Class": "85.51",
        "Activity": "Sports and recreation education"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.5",
        "Class": "85.52",
        "Activity": "Cultural education"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.5",
        "Class": "85.53",
        "Activity": "Driving school activities"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.5",
        "Class": "85.59",
        "Activity": "Other education n.e.c."
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.6",
        "Class": null,
        "Activity": "Educational support activities"
    },
    {
        "Section": "P",
        "Division": "85",
        "Group": "85.6",
        "Class": "85.60",
        "Activity": "Educational support activities"
    },
    {
        "Section": "Q",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Human Health And Social Work Activities"
    },
    {
        "Section": "Q",
        "Division": "86",
        "Group": null,
        "Class": null,
        "Activity": "Human health activities"
    },
    {
        "Section": "Q",
        "Division": "86",
        "Group": "86.1",
        "Class": null,
        "Activity": "Hospital activities"
    },
    {
        "Section": "Q",
        "Division": "86",
        "Group": "86.1",
        "Class": "86.10",
        "Activity": "Hospital activities"
    },
    {
        "Section": "Q",
        "Division": "86",
        "Group": "86.2",
        "Class": null,
        "Activity": "Medical and dental practice activities"
    },
    {
        "Section": "Q",
        "Division": "86",
        "Group": "86.2",
        "Class": "86.21",
        "Activity": "General medical practice activities"
    },
    {
        "Section": "Q",
        "Division": "86",
        "Group": "86.2",
        "Class": "86.22",
        "Activity": "Specialist medical practice activities"
    },
    {
        "Section": "Q",
        "Division": "86",
        "Group": "86.2",
        "Class": "86.23",
        "Activity": "Dental practice activities"
    },
    {
        "Section": "Q",
        "Division": "86",
        "Group": "86.9",
        "Class": null,
        "Activity": "Other human health activities"
    },
    {
        "Section": "Q",
        "Division": "86",
        "Group": "86.9",
        "Class": "86.90",
        "Activity": "Other human health activities"
    },
    {
        "Section": "Q",
        "Division": "87",
        "Group": null,
        "Class": null,
        "Activity": "Residential care activities"
    },
    {
        "Section": "Q",
        "Division": "87",
        "Group": "87.1",
        "Class": null,
        "Activity": "Residential nursing care activities"
    },
    {
        "Section": "Q",
        "Division": "87",
        "Group": "87.1",
        "Class": "87.10",
        "Activity": "Residential nursing care activities"
    },
    {
        "Section": "Q",
        "Division": "87",
        "Group": "87.2",
        "Class": null,
        "Activity": "Residential care activities for mental retardation, mental health and substance abuse"
    },
    {
        "Section": "Q",
        "Division": "87",
        "Group": "87.2",
        "Class": "87.20",
        "Activity": "Residential care activities for mental retardation, mental health and substance abuse"
    },
    {
        "Section": "Q",
        "Division": "87",
        "Group": "87.3",
        "Class": null,
        "Activity": "Residential care activities for the elderly and disabled"
    },
    {
        "Section": "Q",
        "Division": "87",
        "Group": "87.3",
        "Class": "87.30",
        "Activity": "Residential care activities for the elderly and disabled"
    },
    {
        "Section": "Q",
        "Division": "87",
        "Group": "87.9",
        "Class": null,
        "Activity": "Other residential care activities"
    },
    {
        "Section": "Q",
        "Division": "87",
        "Group": "87.9",
        "Class": "87.90",
        "Activity": "Other residential care activities"
    },
    {
        "Section": "Q",
        "Division": "88",
        "Group": null,
        "Class": null,
        "Activity": "Social work activities without accommodation"
    },
    {
        "Section": "Q",
        "Division": "88",
        "Group": "88.1",
        "Class": null,
        "Activity": "Social work activities without accommodation for the elderly and disabled"
    },
    {
        "Section": "Q",
        "Division": "88",
        "Group": "88.1",
        "Class": "88.10",
        "Activity": "Social work activities without accommodation for the elderly and disabled"
    },
    {
        "Section": "Q",
        "Division": "88",
        "Group": "88.9",
        "Class": null,
        "Activity": "Other social work activities without accommodation"
    },
    {
        "Section": "Q",
        "Division": "88",
        "Group": "88.9",
        "Class": "88.91",
        "Activity": "Child day-care activities"
    },
    {
        "Section": "Q",
        "Division": "88",
        "Group": "88.9",
        "Class": "88.99",
        "Activity": "Other social work activities without accommodation n.e.c."
    },
    {
        "Section": "R",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Arts, Entertainment And Recreation"
    },
    {
        "Section": "R",
        "Division": "90",
        "Group": null,
        "Class": null,
        "Activity": "Creative, arts and entertainment activities"
    },
    {
        "Section": "R",
        "Division": "90",
        "Group": "90.0",
        "Class": null,
        "Activity": "Creative, arts and entertainment activities"
    },
    {
        "Section": "R",
        "Division": "90",
        "Group": "90.0",
        "Class": "90.01",
        "Activity": "Performing arts"
    },
    {
        "Section": "R",
        "Division": "90",
        "Group": "90.0",
        "Class": "90.02",
        "Activity": "Support activities to performing arts"
    },
    {
        "Section": "R",
        "Division": "90",
        "Group": "90.0",
        "Class": "90.03",
        "Activity": "Artistic creation"
    },
    {
        "Section": "R",
        "Division": "90",
        "Group": "90.0",
        "Class": "90.04",
        "Activity": "Operation of arts facilities"
    },
    {
        "Section": "R",
        "Division": "91",
        "Group": null,
        "Class": null,
        "Activity": "Libraries, archives, museums and other cultural activities"
    },
    {
        "Section": "R",
        "Division": "91",
        "Group": "91.0",
        "Class": null,
        "Activity": "Libraries, archives, museums and other cultural activities"
    },
    {
        "Section": "R",
        "Division": "91",
        "Group": "91.0",
        "Class": "91.01",
        "Activity": "Library and archives activities"
    },
    {
        "Section": "R",
        "Division": "91",
        "Group": "91.0",
        "Class": "91.02",
        "Activity": "Museums activities"
    },
    {
        "Section": "R",
        "Division": "91",
        "Group": "91.0",
        "Class": "91.03",
        "Activity": "Operation of historical sites and buildings and similar visitor attractions"
    },
    {
        "Section": "R",
        "Division": "91",
        "Group": "91.0",
        "Class": "91.04",
        "Activity": "Botanical and zoological gardens and nature reserves activities"
    },
    {
        "Section": "R",
        "Division": "92",
        "Group": null,
        "Class": null,
        "Activity": "Gambling and betting activities"
    },
    {
        "Section": "R",
        "Division": "92",
        "Group": "92.0",
        "Class": null,
        "Activity": "Gambling and betting activities"
    },
    {
        "Section": "R",
        "Division": "92",
        "Group": "92.0",
        "Class": "92.00",
        "Activity": "Gambling and betting activities"
    },
    {
        "Section": "R",
        "Division": "93",
        "Group": null,
        "Class": null,
        "Activity": "Sports activities and amusement and recreation activities"
    },
    {
        "Section": "R",
        "Division": "93",
        "Group": "93.1",
        "Class": null,
        "Activity": "Sports activities"
    },
    {
        "Section": "R",
        "Division": "93",
        "Group": "93.1",
        "Class": "93.11",
        "Activity": "Operation of sports facilities"
    },
    {
        "Section": "R",
        "Division": "93",
        "Group": "93.1",
        "Class": "93.12",
        "Activity": "Activities of sport clubs"
    },
    {
        "Section": "R",
        "Division": "93",
        "Group": "93.1",
        "Class": "93.13",
        "Activity": "Fitness facilities"
    },
    {
        "Section": "R",
        "Division": "93",
        "Group": "93.1",
        "Class": "93.19",
        "Activity": "Other sports activities"
    },
    {
        "Section": "R",
        "Division": "93",
        "Group": "93.2",
        "Class": null,
        "Activity": "Amusement and recreation activities"
    },
    {
        "Section": "R",
        "Division": "93",
        "Group": "93.2",
        "Class": "93.21",
        "Activity": "Activities of amusement parks and theme parks"
    },
    {
        "Section": "R",
        "Division": "93",
        "Group": "93.2",
        "Class": "93.29",
        "Activity": "Other amusement and recreation activities"
    },
    {
        "Section": "S",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Other Service Activities"
    },
    {
        "Section": "S",
        "Division": "94",
        "Group": null,
        "Class": null,
        "Activity": "Activities of membership organisations"
    },
    {
        "Section": "S",
        "Division": "94",
        "Group": "94.1",
        "Class": null,
        "Activity": "Activities of business, employers and professional membership organisations"
    },
    {
        "Section": "S",
        "Division": "94",
        "Group": "94.1",
        "Class": "94.11",
        "Activity": "Activities of business and employers membership organisations"
    },
    {
        "Section": "S",
        "Division": "94",
        "Group": "94.1",
        "Class": "94.12",
        "Activity": "Activities of professional membership organisations"
    },
    {
        "Section": "S",
        "Division": "94",
        "Group": "94.2",
        "Class": null,
        "Activity": "Activities of trade unions"
    },
    {
        "Section": "S",
        "Division": "94",
        "Group": "94.2",
        "Class": "94.20",
        "Activity": "Activities of trade unions"
    },
    {
        "Section": "S",
        "Division": "94",
        "Group": "94.9",
        "Class": null,
        "Activity": "Activities of other membership organisations"
    },
    {
        "Section": "S",
        "Division": "94",
        "Group": "94.9",
        "Class": "94.91",
        "Activity": "Activities of religious organisations"
    },
    {
        "Section": "S",
        "Division": "94",
        "Group": "94.9",
        "Class": "94.92",
        "Activity": "Activities of political organisations"
    },
    {
        "Section": "S",
        "Division": "94",
        "Group": "94.9",
        "Class": "94.99",
        "Activity": "Activities of other membership organisations n.e.c."
    },
    {
        "Section": "S",
        "Division": "95",
        "Group": null,
        "Class": null,
        "Activity": "Repair of computers and personal and household goods"
    },
    {
        "Section": "S",
        "Division": "95",
        "Group": "95.1",
        "Class": null,
        "Activity": "Repair of computers and communication equipment"
    },
    {
        "Section": "S",
        "Division": "95",
        "Group": "95.1",
        "Class": "95.11",
        "Activity": "Repair of computers and peripheral equipment"
    },
    {
        "Section": "S",
        "Division": "95",
        "Group": "95.1",
        "Class": "95.12",
        "Activity": "Repair of communication equipment"
    },
    {
        "Section": "S",
        "Division": "95",
        "Group": "95.2",
        "Class": null,
        "Activity": "Repair of personal and household goods"
    },
    {
        "Section": "S",
        "Division": "95",
        "Group": "95.2",
        "Class": "95.21",
        "Activity": "Repair of consumer electronics"
    },
    {
        "Section": "S",
        "Division": "95",
        "Group": "95.2",
        "Class": "95.22",
        "Activity": "Repair of household appliances and home and garden equipment"
    },
    {
        "Section": "S",
        "Division": "95",
        "Group": "95.2",
        "Class": "95.23",
        "Activity": "Repair of footwear and leather goods"
    },
    {
        "Section": "S",
        "Division": "95",
        "Group": "95.2",
        "Class": "95.24",
        "Activity": "Repair of furniture and home furnishings"
    },
    {
        "Section": "S",
        "Division": "95",
        "Group": "95.2",
        "Class": "95.25",
        "Activity": "Repair of watches, clocks and jewellery"
    },
    {
        "Section": "S",
        "Division": "95",
        "Group": "95.2",
        "Class": "95.29",
        "Activity": "Repair of other personal and household goods"
    },
    {
        "Section": "S",
        "Division": "96",
        "Group": null,
        "Class": null,
        "Activity": "Other personal service activities"
    },
    {
        "Section": "S",
        "Division": "96",
        "Group": "96.0",
        "Class": null,
        "Activity": "Other personal service activities"
    },
    {
        "Section": "S",
        "Division": "96",
        "Group": "96.0",
        "Class": "96.01",
        "Activity": "Washing and (dry-)cleaning of textile and fur products"
    },
    {
        "Section": "S",
        "Division": "96",
        "Group": "96.0",
        "Class": "96.02",
        "Activity": "Hairdressing and other beauty treatment"
    },
    {
        "Section": "S",
        "Division": "96",
        "Group": "96.0",
        "Class": "96.03",
        "Activity": "Funeral and related activities"
    },
    {
        "Section": "S",
        "Division": "96",
        "Group": "96.0",
        "Class": "96.04",
        "Activity": "Physical well-being activities"
    },
    {
        "Section": "S",
        "Division": "96",
        "Group": "96.0",
        "Class": "96.09",
        "Activity": "Other personal service activities n.e.c."
    },
    {
        "Section": "T",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Activities Of Households As Employers; Undifferentiated Goods- And Services-producing  \nActivities Of Households For Own Use"
    },
    {
        "Section": "T",
        "Division": "97",
        "Group": null,
        "Class": null,
        "Activity": "Activities of households as employers of domestic personnel"
    },
    {
        "Section": "T",
        "Division": "97",
        "Group": "97.0",
        "Class": null,
        "Activity": "Activities of households as employers of domestic personnel"
    },
    {
        "Section": "T",
        "Division": "97",
        "Group": "97.0",
        "Class": "97.00",
        "Activity": "Activities of households as employers of domestic personnel"
    },
    {
        "Section": "T",
        "Division": "98",
        "Group": null,
        "Class": null,
        "Activity": "Undifferentiated goods- and services-producing activities of private households for own use"
    },
    {
        "Section": "T",
        "Division": "98",
        "Group": "98.1",
        "Class": null,
        "Activity": "Undifferentiated goods-producing activities of private households for own use"
    },
    {
        "Section": "T",
        "Division": "98",
        "Group": "98.1",
        "Class": "98.10",
        "Activity": "Undifferentiated goods-producing activities of private households for own use"
    },
    {
        "Section": "T",
        "Division": "98",
        "Group": "98.2",
        "Class": null,
        "Activity": "Undifferentiated service-producing activities of private households for own use"
    },
    {
        "Section": "T",
        "Division": "98",
        "Group": "98.2",
        "Class": "98.20",
        "Activity": "Undifferentiated service-producing activities of private households for own use"
    },
    {
        "Section": "U",
        "Division": null,
        "Group": null,
        "Class": null,
        "Activity": "Activities Of Extraterritorial Organisations And Bodies"
    },
    {
        "Section": "U",
        "Division": "99",
        "Group": null,
        "Class": null,
        "Activity": "Activities of extraterritorial organisations and bodies"
    },
    {
        "Section": "U",
        "Division": "99",
        "Group": "99.0",
        "Class": null,
        "Activity": "Activities of extraterritorial organisations and bodies"
    },
    {
        "Section": "U",
        "Division": "99",
        "Group": "99.0",
        "Class": "99.00",
        "Activity": "Activities of extraterritorial organisations and bodies"
    }]
