# AI Code Reviewer

An AI-powered tool for reviewing JavaScript code and providing suggestions using Hugging Face models.  
Frontend is deployed on **Vercel**, and backend is deployed on **Render**.

---

## 🚀 Features
- Code editor with Monaco Editor
- AI-based suggestions and improvements
- Clean UI with syntax highlighting
- Easy deployment on Vercel (Frontend) and Render (Backend)

---

## 🛠️ Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/ai-code-reviewer.git
cd ai-code-reviewer
```

### 2. Install Dependencies

#### Frontend
```bash
cd frontend
npm install
```

#### Backend
```bash
cd backend
npm install
```

### 3. Environment Variables
Create a `.env` file in the **backend** folder and add your Hugging Face API key:

```env
HUGGINGFACE_API_KEY=your_api_key_here
```

### 4. Run Locally

#### Start Backend
```bash
cd backend
node server.js
```

#### Start Frontend
```bash
cd frontend
npm start
```

The app will be available at **http://localhost:3000** with the backend running at **http://localhost:5000**.

---

## 🌍 Deployment

### 🔗 Live Links
- **Frontend (Vercel):** https://ai-code-review-frontend.vercel.app  
- **Backend (Render):** https://ai-code-review-backend-csl7.onrender.com  

### 🚀 Deploy Backend on Render
1. Push backend code to a GitHub repository.  
2. Login to [Render](https://render.com) and create a new Web Service.  
3. Connect it to your backend GitHub repo.  
4. Set **Build Command:**
   ```bash
   npm install
   ```
5. Set **Start Command:**
   ```bash
   node server.js
   ```
6. Add environment variable in Render:
   ```env
   HUGGINGFACE_API_KEY=your_api_key_here
   ```
7. Deploy and get the Render backend URL.

### 🚀 Deploy Frontend on Vercel
1. Push frontend code to a GitHub repository.  
2. Login to [Vercel](https://vercel.com) and create a new project.  
3. Import the frontend repo.  
4. Add environment variable in Vercel if needed:
   ```env
   REACT_APP_BACKEND_URL=https://your-backend.onrender.com
   ```
5. Deploy and get the Vercel frontend URL.

### 🔧 Update API Endpoint
In the frontend code, update the axios call to point to the deployed backend:
```js
const response = await axios.post("https://your-backend.onrender.com/analyze", { code });
```

---


