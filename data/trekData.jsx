const trekData = [
    {
        type: "Jalur A",
        level: "easy-a",
        color: "var(--green)",
        title: 'TREKKING EASY',
        waktu: "2-3 Jam",
        jarak: "2-5 KM",
        harga: "Rp 150.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20easy%20jalur%20A",
        img: [
            "/img/easy-a/img1.webp",
            "/img/easy-a/img2.webp",
            "/img/easy-a/img3.webp",
            "/img/easy-a/img4.webp",
            "/img/easy-a/img5.webp",
            "/img/easy-a/img6.webp",
            "/img/easy-a/img7.webp",
            "/img/easy-a/img8.webp",
            "/img/easy-a/img9.webp",
        ],
        rute: [
            "Pesawahan",
            "Sungai Sangkuriang",
            "Hutan Pinus",
            "Kebun Singkong & Kebun Sereh",
            "Perbukitan",
            "Curug Leuwi Asih"
        ],
        wisata: {},
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Trekking Easy Jalur A ini cocok banget buat kamu yang pengen nyobain trekking tapi tetep santai, Jalurnya ringan, tapi pemandangannya tetap luar biasa! sambil jalan santai, kamu bisa nikmatin segarnya alam dan susana yang bikin rileks.",
    },

    {
        type: "Jalur B",
        level: "easy-b",
        color: "var(--green)",
        title: 'TREKKING EASY',
        waktu: "2-3 Jam",
        jarak: "2-4 KM",
        harga: "Rp 150.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20easy%20jalur%20B",
        img: [
            "/img/easy-b/img1.webp",
            "/img/easy-b/img2.webp",
            "/img/easy-b/img3.webp",
            "/img/easy-b/img4.webp",
            "/img/easy-b/img5.webp",
            "/img/easy-b/img6.webp",
            "/img/easy-b/img7.webp",
            "/img/easy-b/img8.webp",
            "/img/easy-b/img9.webp",
            "/img/easy-b/img10.webp",
        ],
        rute: [
            "Perkampungan Penduduk",
            "Pesawahan",
            "Hutan Kopi",
            "Air Terjun Curug Barong",
            "Leuwi Cepet & Leuwi Lieuk",
            "Perbukitan",
            "Curug Leuwi Hejo"
        ],
        wisata: {},
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Trekking Easy Jalur B adalah cara ideal untuk memulai petualangan trekking Anda. Dirancang sebagai pengalaman santai, rute ini memungkinkan Anda menikmati keindahan alam tanpa harus mengorbankan kenyamanan dan kesenangan.",
    },
    {
        type: "Jalur C",
        level: "easy-c",
        color: "var(--green)",
        title: 'TREKKING EASY',
        waktu: "3-4 Jam",
        jarak: "4-5 KM",
        harga: "Rp 150.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20easy%20jalur%20C",
        img: [
            "/img/easy-c/img1.webp",
            "/img/easy-c/img2.webp",
            "/img/easy-c/img3.webp",
            "/img/easy-c/img4.webp",
            "/img/easy-c/img5.webp",
        ],
        rute: [
            "Lapangan Gunung Kuta (start)",
            "Perkebunan Bambu",
            "Bukit Rumah Pohon (spot foto + istirahat ringan)",
            "Lereng Gunung Kuta",
            "Perkebunan Kopi",
            "Curug Romantis",
            "Bukit View Point (panorama alam)",
            "Curug Mariuk",
            "Perkebunan Kopi (rute pulang)",
            "Perkebunan Singkong",
            "Parkiran (finish)"
        ],
        wisata: {},
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Trekking Easy Jalur C adalah cara ideal untuk memulai petualangan trekking Anda. Dirancang sebagai pengalaman santai, rute ini memungkinkan Anda menikmati keindahan alam tanpa harus mengorbankan kenyamanan dan kesenangan.",
    },
    {
        type: "Jalur D",
        level: "easy-d",
        color: "var(--green)",
        title: 'TREKKING EASY',
        waktu: "2-3 Jam",
        jarak: "2-4 KM",
        harga: "Rp 150.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20easy%20jalur%20D",
        img: [
            "/img/easy-d/img1.webp",
            "/img/easy-d/img2.webp",
            "/img/easy-d/img3.webp",
            "/img/easy-d/img4.webp",
            "/img/easy-d/img5.webp",
            "/img/easy-d/img6.webp",
            "/img/easy-d/img7.webp",
            "/img/easy-d/img8.webp",
        ],
        rute: [
            "Perkampungan Penduduk",
            "Sungai Putri Kencana",
            "Perkebunan Kopi",
            "Curug Putri Kencana",
            "Hutan Bambu",
            "Curug Cinta",
            "Hutan Kopi"
        ],
        wisata: {},
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Mulailah petualangan trekking Anda dengan Trekking Easy Jalur D, pilihan sempurna untuk Anda yang ingin menikmati alam dalam suasana santai namun tetap berkesan. Rute ini dirancang untuk pemula maupun pecinta alam yang mencari pengalaman ringan tapi tetap kaya panorama.",
    },

    // MEDIUM TREK \\
    {
        type: "Jalur A",
        level: "medium-a",
        color: "var(--yellow)",
        title: 'TREKKING MEDIUM',
        waktu: "3-4 Jam",
        jarak: "7-8 KM",
        harga: "Rp 165.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20medium%20jalur%20A",
        img: [
            "/img/medium-a/img1.webp",
            "/img/medium-a/img2.webp",
            "/img/medium-a/img3.webp",
            "/img/medium-a/img4.webp",
            "/img/medium-a/img5.webp",
            "/img/medium-a/img6.webp",
            "/img/medium-a/img7.webp",
            "/img/medium-a/img8.webp",
            "/img/medium-a/img9.webp",
        ],
        rute: [
            "Pesawahan",
            "Sungai Sangkuriang",
            "Hutan Pinus",
            "Perbukitan",
            "Perkebunan Singkong",
            "Goa Agung Garunggang (lokasi wisata bersejarah)",
            "Perkebunan Serai",
            "Curug Leuwi Asih"
        ],
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Trekking Medium Jalur A adalah pilihan ideal bagi Anda yang ingin merasakan petualangan dengan tantangan sedang, namun tetap nyaman dinikmati. Rute ini menghadirkan perpaduan alam yang indah dan rute yang variatif — cocok untuk petualang yang ingin mengeksplorasi lebih banyak, tanpa harus ekstrem.",
    },
    {
        type: "Jalur B",
        level: "medium-b",
        color: "var(--yellow)",
        title: 'TREKKING MEDIUM',
        waktu: "3-4 Jam",
        jarak: "7-8 KM",
        harga: "Rp 165.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20medium%20jalur%20B",
        img: [
            "/img/medium-b/img1.webp",
            "/img/medium-b/img2.webp",
            "/img/medium-b/img3.webp",
            "/img/medium-b/img4.webp",
            "/img/medium-b/img5.webp",
            "/img/medium-b/img6.webp",
        ],
        rute: [
            "Perkampungan Penduduk",
            "Pesawahan",
            "Perbukitan",
            "Hutan Kopi"
        ],
        wisata: {
            1: ["Curug Barong", "Leuwi Cepet", "Leuwi Liek"],
        },
        step : [
            {
                title: "Melanjutkan perjalanan menuju :",
                destination: ["Curug Baliung"]
            },
            {
                title: "Melanjutkan perjalanan menuju :",
                destination: ["Leuwi Hejo - lokasi wisata penutup"]
            },
        ],
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Trek B Medium menghadirkan perjalanan dengan jalur menengah yang memadukan keindahan alam dan nuansa lokal khas Sentul. Cocok untuk Anda yang ingin merasakan petualangan ringan namun tetap penuh variasi.",
    },
    {
        type: "Jalur C",
        level: "medium-c",
        color: "var(--yellow)",
        title: 'TREKKING MEDIUM',
        waktu: "4-5 Jam",
        jarak: "7-8 KM",
        harga: "Rp 165.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20medium%20jalur%20C",
        img: [
            "/img/medium-c/img1.webp",
            "/img/medium-c/img2.webp",
            "/img/medium-c/img3.webp",
            "/img/medium-c/img4.webp",
            "/img/medium-c/img5.webp",
            "/img/medium-c/img6.webp",
            "/img/medium-c/img7.webp",
            "/img/medium-c/img8.webp",
            "/img/medium-c/img9.webp",
            "/img/medium-c/img10.webp",
            "/img/medium-c/img11.webp",
        ],
        rute: [
            "Hutan Jaibon",
            "Perkebunan Kopi",
            "Susur Sungai",
            "Leuwi Lesung",
            "Curug Ciburial",
            "Hutan Kopi",
            "Curug Kembar & Curug Hordeng",
            "Perbukitan"
        ],
        wisata: {
            1: ["Curug Ciburial", "Curug Kembar & Curug Hordeng"],
            2: ["Leuwi Lesung"],
        },
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Trekking Medium Jalur C ini pilihan tepat bagi Anda yang mencari petualangan dengan tingkat kesulitan sedang. Rute ini menawarkan tantangan yang menggembirakan, sekaligus menyuguhkan keindahan alam Sentul yang luar biasa.",
    },
    {
        type: "Jalur D",
        level: "medium-d",
        color: "var(--yellow)",
        title: 'TREKKING MEDIUM',
        waktu: "4-5 Jam",
        jarak: "7-8 KM",
        harga: "Rp 165.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20medium%20jalur%20D",
        img: [
            "/img/medium-d/img1.webp",
            "/img/medium-d/img2.webp",
            "/img/medium-d/img3.webp",
            "/img/medium-d/img4.webp",
            "/img/medium-d/img5.webp",
        ],
        rute: [
            "Kampung Cibimbim (start)",
            "Sungai Cibimbim (menyusuri tepian sungai)",
            "Area Pesawahan",
            "Susur Sungai",
            "Perkebunan Singkong",
            "Perbukitan Hijau",
            "Hutan Pinus",
            "Area Pesawahan ke-2 (dataran terbuka)",
            "Perbukitan ke-2",
            "Curug Bidadari",
            "Area Pesawahan ke-3",
            "Hutan Kopi",
            "Titik Awal atau Jemput (finish)"
        ],
        wisata: {},
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Trekking Medium Jalur C ini pilihan tepat bagi Anda yang mencari petualangan dengan tingkat kesulitan sedang. Rute ini menawarkan tantangan yang menggembirakan, sekaligus menyuguhkan keindahan alam Sentul yang luar biasa.",
    },
    // SEMI EXTREME \\
    {
        type: "",
        level: "semi-extreme",
        color: "var(--oren)",
        title: 'TREKKING SEMI-EXTREME',
        waktu: "5-6 Jam",
        jarak: "12 KM",
        harga: "Rp 195.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20semi-extreme",
        img: [
            "/img/semi-extreme/img1.webp",
            "/img/semi-extreme/img2.webp",
            "/img/semi-extreme/img3.webp",
            "/img/semi-extreme/img4.webp",
            "/img/semi-extreme/img5.webp",
            "/img/semi-extreme/img6.webp",
        ],
        rute: [
            "Perbukitan",
            "Kebun Singkong",
            "Bukit Gunung Pancar",
            "Bukit Paniisan (850 MDPL)",
            "Hutan Kopi",
            "Hutan Bambu",
            "Curug Cibimbim",
            "Curug Ngumpet"
        ],
        wisata: {
            1: ["Gunung Pancar", "Bukit Paniisan (850 MDPL)"],
            2: ["Curug Cibimbim", "Curug Ngumpet"],
        },
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Bagi kamu yang siap menghadapi tantangan lebih serius, Trek Semi Ekstrem adalah pilihan tepat. Rute ini menyajikan medan variatif dengan elevasi yang menantang, lanskap alami yang menakjubkan, serta destinasi tersembunyi yang memuaskan jiwa petualang Anda.",
    },
    {
        type: "",
        level: "extreme",
        color: "var(--red)",
        title: 'TREKKING EXTREME',
        waktu: "6-7 Jam",
        jarak: "20 KM",
        harga: "Rp 250.000/Orang",
        msg: "Halo%2C%20saya%20mau%20tanya%20paket%20trekking%20extreme",
        img: [
            "/img/extreme/img1.webp",
            "/img/extreme/img2.webp",
            "/img/extreme/img3.webp",
            "/img/extreme/img4.webp",
            "/img/extreme/vid1.mov",
        ],
        rute: [
            "Perbukitan",
            "Kebun Singkong",
            "Bukit Gunung Pancar",
            "Bukit Paniisan (850 MDPL)",
            "Hutan Kopi",
            "Hutan Bambu",
            "Danau Cisadon"
        ],
        wisata: {
            1: ["Gunung Pancar", "Bukit Paniisan (850 MDPL)"],
            2: ["Curug Love", "Curug Putri", "Danau Cisadon"],
        },
        pack: [
            "Jas Hujan",
            "Air Mineral dingin",
            "Trekking Pole",
            "Dokumentasi (Foto/Video)"
        ],
        desc: "Trek Extreme ini cocok untuk kamu yang siap berkeringat dan ingin merasakan petualangan alam yang utuh!",
    },
]

export default trekData;