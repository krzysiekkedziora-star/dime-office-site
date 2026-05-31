# DIME OFFICE - Poznań | Nowoczesna Strona Wirtualnego Biura

Profesjonalna, responsywna strona internetowa dla wirtualnego biura DIME OFFICE w Poznaniu. Dostępna w trzech językach: Polski, Angielski i Ukraiński.

## Funkcjonalności

- ✅ Responsywny design (mobile-first)
- ✅ Wielojęzyczność (PL, EN, UK)
- ✅ Strona główna z hero sectionem
- ✅ Opis usług i cennik
- ✅ Interaktywny formularz wyboru umowy
- ✅ FAQ z accordion'ami
- ✅ Sekcja "Dlaczego my?"
- ✅ Informacje kontaktowe i mapa
- ✅ SEO optimized
- ✅ Tailwind CSS styling

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **next-intl** - Internationalization

## Struktura Projektu

```
.
├── app/
│   ├── [locale]/
│   │   ├── page.tsx           # Strona główna
│   │   ├── how-to-start/      # Jak zacząć
│   │   ├── faq/               # FAQ
│   │   └── contact/           # Kontakt
│   ├── layout.tsx
│   └── globals.css
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Pricing.tsx
│   ├── WhyUs.tsx
│   ├── HowToStart.tsx
│   ├── FAQ.tsx
│   └── Contact.tsx
├── messages/
│   ├── pl.json               # Polskie tłumaczenia
│   ├── en.json               # English translations
│   └── uk.json               # Українські переклади
└── next.config.js
```

## Instalacja

```bash
# Zainstaluj zależności
npm install

# Uruchom serwer deweloperski
npm run dev
```

Otwórz [http://localhost:3000/pl](http://localhost:3000/pl) w przeglądarce.

## Build

```bash
npm run build
npm start
```

## Zmienne Środowiskowe

Nie wymagane do uruchomienia (opcjonalnie na produkcji do wysyłania emaili):

```
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASS=
```

## Kontakt

📞 **Telefon:** 730 790 100
📧 **Email:** krzysztof.kedziora@dimeoffice.pl
📍 **Adres:** ul. Głogowska 31/33, Poznań

---

© 2025 DIME OFFICE. Wszelkie prawa zastrzeżone.
