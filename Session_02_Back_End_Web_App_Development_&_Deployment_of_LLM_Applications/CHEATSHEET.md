# Session 2 Prep: Backend Development & Deployment
## Quick Reference Guide for Monday 🚀

### ✅ Before Class - Install & Setup

**Required Accounts:**
- GitHub account (for code hosting)
- Vercel account (for deployment)
- OpenAI API key ([platform.openai.com](https://platform.openai.com))

**Required Software:**
- Python 3.12+
- Cursor IDE
- `uv` (Python package manager)
- Vercel CLI: `npm install -g vercel`

---

### 🎯 What You'll Build

**"TreatOrHell" FastAPI Backend** - A holiday-themed chat app with AI personas:
- 🎅 **St. Nicholas** - Jolly, warm, wise ("treat or hell" judge)
- 👼 **Angel** - Overly emotional, sparkly, dramatic (believes in redemption)
- 😈 **Devil** - Sarcastic, chaotic, funny (playful roasting)

---

### 🧱 Key Technologies Cheatsheet

**FastAPI Basics:**
```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="MyApp")

class ChatRequest(BaseModel):
    message: str

@app.get("/")              # GET endpoint
def home():
    return {"hello": "world"}

@app.post("/chat")         # POST endpoint
def chat(req: ChatRequest):
    return {"reply": req.message}
```

**OpenAI API Pattern:**
```python
from openai import OpenAI
import os

client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

response = client.chat.completions.create(
    model="gpt-4o-mini",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello!"}
    ]
)

reply = response.choices[0].message.content
```

---

### 📁 Project Structure

```
your-project/
├── api/
│   └── index.py           # Main FastAPI app
├── .env                   # API keys (DON'T commit!)
├── pyproject.toml         # Python dependencies
├── requirements.txt       # For Vercel
├── vercel.json            # Vercel config
├── gitflow_rules.md       # Git workflow reference
└── cursor_rules.md        # Cursor AI rules
```

**Vercel Config (`vercel.json`):**
```json
{
  "version": 2,
  "routes": [
    { "src": "/(.*)", "dest": "/api/index.py" }
  ]
}
```

---

### ⚡ Quick Commands Reference

**Local Development:**
```bash
# Install dependencies
uv sync

# Run locally
uv run uvicorn api.index:app --reload --host 0.0.0.0 --port 8000

# Test at:
# http://localhost:8000
# http://localhost:8000/docs (Swagger UI)
```

**Git Workflow:**
```bash
# Clone and setup
git clone <your-repo>
cd <your-repo>

# Create develop branch
git checkout -b develop
git push -u origin develop

# Work on feature
git checkout -b feature/angel-chat
# ... make changes ...
git add .
git commit -m "Add angel chat endpoint"
git push -u origin feature/angel-chat
```

**Deploy to Vercel:**
```bash
# First time
vercel --prod

# Set environment variables in Vercel dashboard:
# Settings → Environment Variables → Add OPENAI_API_KEY

# Redeploy
vercel --prod
```

---

### 🎨 Angel Persona Template

```python
system_prompt = """You are an overly emotional, sparkly Angel.
Everything is dramatic, positive, full of tears and glitter.
You compliment the user even when they clearly messed up.
You believe in redemption no matter what.
Your tone: soft, poetic, hopeful, enthusiastic."""
```

---

### 🔥 Common Gotchas

1. **Don't commit `.env`** - Add to `.gitignore`
2. **Set OPENAI_API_KEY in Vercel** - Settings → Environment Variables
3. **Use `uv run` prefix** for running Python commands
4. **Test locally first** before deploying
5. **Check `/docs` endpoint** for interactive API testing

---

### 📚 Quick Links

- [FastAPI Tutorial](https://fastapi.tiangolo.com/tutorial/first-steps/)
- [OpenAI API Docs](https://platform.openai.com/docs/guides/text)
- Sample scripts in `sample_backend_scripts/` folder
- Assignment details in [Assignment.md](Assignment.md)

---

### 🎯 Advanced (Optional)

**4-Question Student Form:**
- Q1: How did you handle your first assignment?
- Q2: When you didn't understand something, what did you do?
- Q3: How do you engage in class?
- Q4: How many hours did you spend on the assignment?

**Goal:** Save responses to file → Include in Angel's system prompt → Personalized responses

---

### ✨ Success Checklist

- [ ] Python 3.12+ installed
- [ ] Vercel & GitHub accounts ready
- [ ] OpenAI API key obtained
- [ ] `uv` and Vercel CLI installed
- [ ] Reviewed sample scripts in `sample_backend_scripts/`
- [ ] Understand FastAPI basics (routes, Pydantic models)
- [ ] Know how to call OpenAI API
- [ ] Familiar with GitFlow workflow

---

**Pro Tip:** Review `sample_backend_scripts/STEP1_app_llm.py` - it shows the complete working example of what you'll build! 🎉
