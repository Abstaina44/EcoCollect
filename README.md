# 🌱 EcoCollect

> **Smart waste collection for a cleaner Ghana.**

EcoCollect is an **Uber-style waste collection marketplace built for Ghana**, connecting people and businesses that need waste collected with independent waste collectors looking for nearby jobs.

The platform makes waste collection simple, transparent, and convenient:

**Request → Get a Price → Find a Collector → Collect → Complete**

---

## 🚀 What is EcoCollect?

Traditional waste collection can be difficult to coordinate, especially when people need quick, reliable pickup services.

EcoCollect provides a digital marketplace where:

* **Requesters** can create waste pickup requests and receive a price.
* **Collectors** can discover nearby jobs, accept pickups, collect waste, and earn money.
* **Both sides** can track the pickup throughout its lifecycle.

The goal is to make waste collection more accessible while creating additional earning opportunities for waste collectors across Ghana.

---

## ✨ Key Features

### 🗑️ Request Waste Collection

Requesters can create a pickup by providing:

* Waste type
* Estimated weight
* Pickup location
* GPS coordinates
* Waste photo
* Pickup details

The system calculates an estimated collection price before the requester confirms the job.

### 💰 Smart Pricing

EcoCollect uses shared pricing logic to keep pricing consistent throughout the application.

A pickup price can be calculated using:

```text
Base Fee
   +
Weight Fee
   +
Distance Fee
   +
Waste-Type Adjustment
   =
Final Pickup Price
```

This allows pricing to evolve as the marketplace grows.

### 🚛 Collector Marketplace

Collectors can browse available jobs and choose pickups that work for them.

Collectors can:

* View available jobs
* See pickup details
* View location information
* Accept jobs
* Mark waste as collected
* Mark pickups as completed
* Track completed jobs
* Monitor earnings

### 📍 Pickup Tracking

Every pickup follows a clear lifecycle:

```text
PENDING
   ↓
ACCEPTED
   ↓
COLLECTED
   ↓
COMPLETED
```

Pickups can also be cancelled when necessary.

### 📊 Dashboards

#### Requester Dashboard

View:

* Active pickups
* Pending requests
* Pickup history
* Current pickup status
* Pricing information

#### Collector Dashboard

View:

* Available jobs
* Active pickups
* Completed pickups
* Earnings
* Job history

### 🔐 Role-Based Authentication

EcoCollect is designed around two primary user roles:

```text
REQUESTER
COLLECTOR
```

Each role receives an experience tailored to its responsibilities.

---

## 🏗️ Product Architecture

The application is organized around a shared pickup workflow.

```text
                    ECOCOLLECT
                        │
          ┌─────────────┴─────────────┐
          │                           │
      REQUESTER                   COLLECTOR
          │                           │
   Create Pickup                Browse Jobs
          │                           │
   Calculate Price                  Accept
          │                           │
          └─────────────┬─────────────┘
                        │
                    PICKUP
                        │
              ┌─────────┴─────────┐
              │                   │
           COLLECTED          COMPLETED
```

---

## 🗃️ Core Data Model

### User

```text
User
├── id
├── name
├── email
├── phone
├── role
└── location
```

### Pickup

```text
Pickup
├── id
├── requesterId
├── collectorId
├── wasteType
├── weightKg
├── photoUrl
├── address
├── latitude
├── longitude
├── price
├── status
├── createdAt
└── completedAt
```

### Pickup Status

```text
PENDING
ACCEPTED
COLLECTED
COMPLETED
CANCELLED
```

---

## 🛠️ Tech Stack

EcoCollect is built with a modern web development stack.

| Technology             | Purpose                           |
| ---------------------- | --------------------------------- |
| **Next.js**            | Full-stack React framework        |
| **TypeScript**         | Type-safe application development |
| **Tailwind CSS**       | UI styling                        |
| **PostgreSQL**         | Database                          |
| **Prisma**             | Database ORM                      |
| **Auth.js / NextAuth** | Authentication                    |
| **Geolocation / Maps** | Pickup locations and distance     |

> Update this section if the implementation uses different technologies.

---

## 📁 Project Structure

A recommended structure for the application:

```text
EcoCollect/
├── app/
│   ├── dashboard/
│   ├── pickups/
│   ├── jobs/
│   ├── earnings/
│   └── api/
│
├── components/
│   ├── dashboard/
│   ├── pickups/
│   ├── jobs/
│   └── ui/
│
├── lib/
│   ├── auth/
│   ├── pricing/
│   ├── database/
│   └── utils/
│
├── prisma/
│   └── schema.prisma
│
├── public/
│
├── types/
│
├── .env.example
├── package.json
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* Node.js 20+
* npm, pnpm, or yarn
* PostgreSQL
* Git

### 1. Clone the repository

```bash
git clone https://github.com/Abstaina44/EcoCollect.git
cd EcoCollect
```

### 2. Install dependencies

Using npm:

```bash
npm install
```

Or pnpm:

```bash
pnpm install
```

Or yarn:

```bash
yarn install
```

### 3. Configure environment variables

Create your local environment file:

```bash
cp .env.example .env.local
```

Then configure the required variables.

Example:

```env
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/ecocollect"

AUTH_SECRET="your-secret"

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

Add any additional authentication, maps, storage, or payment credentials required by your implementation.

> **Never commit `.env.local` or production secrets to GitHub.**

### 4. Set up Prisma

If Prisma is configured:

```bash
npx prisma generate
```

Run database migrations:

```bash
npx prisma migrate dev
```

### 5. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

---

## 🔄 Core Pickup Workflow

### Requester

```text
Login
  ↓
Create Pickup
  ↓
Select Waste Type
  ↓
Enter Weight
  ↓
Add Location
  ↓
Upload Photo
  ↓
View Price
  ↓
Confirm Pickup
  ↓
PENDING
```

### Collector

```text
Login
  ↓
Browse Available Jobs
  ↓
View Pickup Details
  ↓
Accept Job
  ↓
ACCEPTED
  ↓
Collect Waste
  ↓
COLLECTED
  ↓
Complete Pickup
  ↓
COMPLETED
  ↓
Earnings Updated
```

---

## 🔌 API Design

The backend can expose endpoints around the pickup lifecycle.

```text
POST   /api/pickups
GET    /api/pickups
GET    /api/pickups/:id
PATCH  /api/pickups/:id

POST   /api/pickups/:id/accept
POST   /api/pickups/:id/collect
POST   /api/pickups/:id/complete

GET    /api/jobs
GET    /api/earnings
```

Business-critical operations such as pricing, role verification, and status transitions should be validated server-side.

---

## 💵 Pricing Logic

Pricing should live in one reusable service rather than being duplicated across pages.

Example:

```ts
calculatePickupPrice({
  wasteType,
  weightKg,
  distanceKm,
});
```

The same pricing engine can be used by:

* Pickup creation
* Price previews
* Pickup records
* Collector earnings
* Future payment integrations

This helps prevent pricing inconsistencies between the frontend and backend.

---

## 🎨 Design Philosophy

EcoCollect uses a modern environmental aesthetic designed to feel trustworthy and easy to use.

### UI principles

* 🌱 Eco-green visual identity
* 🧭 Simple navigation
* 📱 Responsive layouts
* 📊 Clear dashboards
* 💰 Transparent pricing
* 📍 Location-aware experiences
* 🚛 Marketplace-style job discovery
* ⚡ Fast and simple pickup creation

The interface should feel familiar to users of on-demand services while remaining focused on waste collection.

---

## 🔒 Security

Because EcoCollect handles user accounts, addresses, locations, and potentially financial information, security is a core consideration.

Production deployments should include:

* Secure authentication
* Server-side authorization
* Input validation
* Rate limiting
* Protected API endpoints
* Secure environment variables
* Server-side pricing validation
* Protected pickup status transitions
* Appropriate handling of location data

Never trust sensitive values supplied directly by the client.

For example, a collector should not be able to manually change:

```text
collectorId
price
requesterId
earnings
status
```

without the server verifying that the operation is authorized.

---

## 🗺️ Roadmap

### Phase 1 — MVP

* [x] Project foundation
* [ ] Authentication
* [ ] User roles
* [ ] Requester dashboard
* [ ] Collector dashboard
* [ ] Create pickup
* [ ] Shared pricing engine
* [ ] Available jobs
* [ ] Accept pickup
* [ ] Pickup status tracking
* [ ] Collector earnings

### Phase 2 — Marketplace

* [ ] Interactive maps
* [ ] Distance-based pricing
* [ ] Nearby job matching
* [ ] Collector ratings
* [ ] Requester ratings
* [ ] Push notifications
* [ ] Pickup scheduling
* [ ] Advanced job filtering

### Phase 3 — Payments

* [ ] Online payments
* [ ] Mobile Money integration
* [ ] Collector payouts
* [ ] Transaction history
* [ ] Payment receipts
* [ ] Refund handling

### Phase 4 — Scale

* [ ] Admin dashboard
* [ ] Analytics
* [ ] Fraud detection
* [ ] Business accounts
* [ ] Recycling partners
* [ ] Waste collection organizations
* [ ] Multi-city support

### Phase 5 — Sustainability

* [ ] Recycling tracking
* [ ] Environmental impact metrics
* [ ] Carbon-impact estimates
* [ ] Community cleanup campaigns
* [ ] Corporate sustainability programs

---

## 🌍 Vision

EcoCollect is more than a waste pickup application.

The long-term vision is to build a **digital infrastructure layer for waste collection in Ghana**, connecting households, businesses, collectors, recycling companies, and environmental organizations.

The platform can eventually help create:

```text
More Collection Jobs
        +
Better Waste Management
        +
More Recycling
        +
Additional Income Opportunities
        =
A Cleaner Ghana
```

---

## 🤝 Contributing

Contributions are welcome.

### Development workflow

1. Fork the repository
2. Create a feature branch

```bash
git checkout -b feature/your-feature
```

3. Make your changes
4. Test locally
5. Commit your changes

```bash
git commit -m "feat: add pickup tracking"
```

6. Push your branch

```bash
git push origin feature/your-feature
```

7. Open a Pull Request

Please keep contributions focused and follow the existing project structure and coding conventions.

---

## 🧪 Testing

Run the project's test suite with:

```bash
npm test
```

For production builds:

```bash
npm run build
```

Then:

```bash
npm start
```

> Commands may vary depending on the scripts configured in `package.json`.

---

## 📌 Project Status

**EcoCollect is currently under active development.**

The initial focus is building a reliable MVP around the core marketplace workflow:

> **Create → Price → Accept → Collect → Complete → Earn**

Features such as payments, advanced matching, notifications, ratings, and sustainability analytics can be added as the platform matures.

---

## 👨🏾‍💻 Author

**Abstaina44**

GitHub: [@Abstaina44](https://github.com/Abstaina44)

Repository: [EcoCollect](https://github.com/Abstaina44/EcoCollect)

---

## 📄 License

This project is licensed under the **MIT License**.

See the `LICENSE` file for more information.

---

## 🌱 EcoCollect

**Request waste. Find a collector. Keep Ghana cleaner.**

Built with the vision of making waste collection **simpler, smarter, and more accessible across Ghana.**
