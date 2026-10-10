# ExportHub — Import-Export Business Suite 📦

**ExportHub** is an all-in-one suite of web applications designed for freight forwarders, exporters, and logistics managers. It streamlines shipping documentation and logistics planning with professional commercial invoice generation and an advanced container loading calculator.

---

## 🌟 Modules & Features

### 1. 📐 Smart CBM & Container Loading Calculator (`/cbm_calculator`)
A container planning and space-optimization tool designed to determine optimal container selection and cargo arrangements.

* **Dimension & Weight Unit Conversion**:
  * Dimension units supported: `cm`, `mm`, `m`, `inch`, `feet`, `yard`
  * Weight units supported: `kg`, `lbs`
* **Automated Volume & Payload Analysis**:
  * Carton CBM & Total Shipment Volume
  * Volumetric Weight for Sea Freight (`1,000 kg/m³`) and Air Freight (`167 kg/m³` / `6,000 cm³/kg`)
  * Multi-unit volume conversions: Cubic Metres ($m^3$), Cubic Feet ($ft^3$), Cubic Inches ($in^3$), Cubic Yards ($yd^3$), Cubic Centimetres ($cm^3$)
* **Built-in Container Presets**:
  * **20' Standard**: 33.2 CBM | 21,700 kg payload (Internal: 590 × 234 × 239 cm)
  * **40' Standard**: 67.7 CBM | 26,680 kg payload (Internal: 1203 × 234 × 239 cm)
  * **40' High Cube**: 76.3 CBM | 26,330 kg payload (Internal: 1203 × 234 × 269 cm)
  * **20' Reefer**: 26.8 CBM | 21,200 kg payload (Internal: 542 × 229 × 215 cm)
  * **40' Reefer**: 56.9 CBM | 27,700 kg payload (Internal: 1145 × 228 × 218 cm)
  * **Custom Container Builder**: Define custom dimensions, volume, and payload limits
* **Loading Optimization Algorithm**:
  * Evaluates all 6 3D spatial orientations ($L \times W \times H$, $L \times H \times W$, $W \times L \times H$, etc.) to maximize cargo count
  * Calculates both volume-limited and payload-limited maximum cartons
  * Identifies remaining space ($m^3$) and remaining payload ($kg$)
* **Smart Recommendation Engine**:
  * Evaluates space and weight utilization across container types
  * Recommends optimal container sizes or suggests LCL (Less than Container Load) when utilization is low
  * One-click container switching
* **Interactive 3D Container Loading Visualization**:
  * Custom HTML5 Canvas 3D projection engine (zero external 3D library dependencies)
  * Multiple visualization modes: **Packed 3D**, **Single Carton**, and **Wireframe**
  * Interactive orbit controls (mouse drag to rotate, wheel to zoom, reset view)
* **Multi-Carton Shipments**:
  * Add multiple carton sizes and item specifications to a single consolidated shipment list
* **Exporting**:
  * Export structured loading reports to **CSV**
  * One-click print-optimized **PDF generation**

---

### 2. 🧾 Export Invoice Generator (`/invoice_generator`)
A commercial invoice and packing list generator built for export businesses.

* **Export Documentation**:
  * Generates export-compliant commercial invoices and packing lists
  * Real-time automated calculations (subtotals, duties, exchange rates, total amounts)
* **Excel Template Integration**:
  * Exports formatted Excel files using `ExcelJS` matching industry standard invoice templates
* **Master Records & Database Sync**:
  * Integrated with Supabase cloud database
  * Consignee, buyer, and product master management

---

### 3. 🌐 Central Portal Landing Page (`/`)
* Modern dark-mode interface linking all active tools and upcoming features (Packing List Builder, Shipping Bill Tracker).

---

## 🛠 Tech Stack

* **Frontend**: Vanilla HTML5, CSS3 (Modern Glassmorphism & Responsive Flex/Grid), JavaScript (ES6+)
* **3D Visualizer**: HTML5 Canvas API with custom 3D projection and lighting mathematics
* **Backend**: Node.js, Express.js
* **Spreadsheet Generation**: [ExcelJS](https://github.com/exceljs/exceljs)
* **Cloud Database**: [Supabase](https://supabase.com/) (`@supabase/supabase-js`)
* **Environment Configuration**: `dotenv`

---

## 📁 Project Structure

```text
ExportHub/
├── cbm_calculator/
│   └── index.html             # Smart CBM & 3D Container Loading Calculator
├── invoice_generator/
│   ├── index.html             # Commercial Invoice Generator Web UI
│   ├── app.js                 # Frontend application logic
│   ├── styles.css             # Invoice application styling
│   ├── invoice-template.js    # Invoice layout & templates
│   ├── invoice-helpers.js     # Currency & tax helpers
│   ├── supabase-config.js     # Supabase client & sync
│   └── INVOICE PL.xlsx        # Excel template reference
├── index.html                 # ExportHub Portal Landing Page
├── landing.css                # Portal styles
├── login.html                 # Authentication interface
├── server.js                  # Express.js local server
├── schema.sql                 # Database table definitions
├── package.json               # Dependencies and scripts
└── README.md                  # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (version 16 or newer)
* npm (bundled with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AnishDharu/ExportHub.git
   cd ExportHub
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Environment Variables** (Optional for Supabase sync):
   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   SUPABASE_URL=your_supabase_project_url
   SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the local server**:
   ```bash
   npm start
   ```

5. **Open in your browser**:
   * **Main Portal**: `http://localhost:3000/`
   * **CBM Calculator**: `http://localhost:3000/cbm_calculator/`
   * **Invoice Generator**: `http://localhost:3000/invoice_generator/`

---

## 📊 Container Reference Specifications

| Container Type | Internal Dimensions ($L \times W \times H$) | Gross Volume | Max Payload |
| :--- | :--- | :--- | :--- |
| **20' Standard** | $590 \times 234 \times 239\text{ cm}$ | $33.2\text{ CBM}$ | $21,700\text{ kg}$ |
| **40' Standard** | $1203 \times 234 \times 239\text{ cm}$ | $67.7\text{ CBM}$ | $26,680\text{ kg}$ |
| **40' High Cube** | $1203 \times 234 \times 269\text{ cm}$ | $76.3\text{ CBM}$ | $26,330\text{ kg}$ |
| **20' Reefer** | $542 \times 229 \times 215\text{ cm}$ | $26.8\text{ CBM}$ | $21,200\text{ kg}$ |
| **40' Reefer** | $1145 \times 228 \times 218\text{ cm}$ | $56.9\text{ CBM}$ | $27,700\text{ kg}$ |

---

## 📄 License

This project is licensed under the MIT License.
