export interface Project {
  title: string;
  slug: string;
  description: string;
  longDescription: string;
  highlights: string[];
  tags: string[];
  category: "ml" | "data-eng" | "quant" | "fullstack";
  github?: string;
  demo?: string;
  status: "completed" | "in-progress" | "planned";
}

export const projects: Project[] = [
  {
    title: "HK Stock Market Predictor",
    slug: "hk-stock-predictor",
    description:
      "ML ensemble (XGBoost + LSTM) predicting next-day price direction for top 10 Hang Seng Index stocks with SHAP interpretability.",
    longDescription:
      "End-to-end ML pipeline that fetches live data for 10 HSI constituents via yfinance, engineers 20+ features (SMA, EMA, MACD, RSI, Bollinger Bands, ATR, OBV, cross-market signals from S&P 500 and Shanghai Composite), and trains an XGBoost + LSTM ensemble to predict next-day price direction. Walk-forward validation prevents data leakage. SHAP TreeExplainer provides full feature importance. Includes a backtest engine comparing the ML strategy against buy-and-hold with Sharpe ratio, max drawdown, and win rate metrics.",
    highlights: [
      "XGBoost + LSTM ensemble with weighted averaging (60/40)",
      "20+ features: technical indicators, volatility, volume, cross-market signals",
      "Walk-forward validation — no data leakage, proper time-series evaluation",
      "SHAP feature importance for model interpretability (banks love this)",
      "Interactive Streamlit dashboard: stock selector, candlestick charts, prediction overlay",
      "Backtest engine: strategy vs buy-and-hold with Sharpe, drawdown, win rate",
    ],
    tags: ["Python", "XGBoost", "PyTorch", "SHAP", "Streamlit", "yfinance"],
    category: "ml",
    github: "https://github.com/Anson-1/hk-stock-predictor",
    demo: "https://anson-1-hk-stock-predictor-app-r9vz6h.streamlit.app/",
    status: "completed",
  },
  {
    title: "Financial News Sentiment Analyzer",
    slug: "hk-news-sentiment",
    description:
      "NLP pipeline analyzing sentiment from Hong Kong financial news sources with FinBERT and real-time visualization.",
    longDescription:
      "Built an end-to-end NLP system that scrapes financial news from Reuters HK, SCMP, Yahoo Finance HK, and Google News via RSS feeds. Uses the pre-trained FinBERT model from Hugging Face for domain-specific sentiment classification. Features rolling sentiment aggregation per stock and sector with a live Streamlit dashboard.",
    highlights: [
      "FinBERT (ProsusAI/finbert) for finance-specific sentiment analysis",
      "RSS scraping from 4 HK news sources with ticker-to-headline mapping",
      "Rolling sentiment aggregation per stock and sector",
      "Sector heatmap and sentiment-vs-price correlation charts",
      "\"Try it yourself\" text input for custom headline analysis",
    ],
    tags: ["Python", "Transformers", "FinBERT", "Streamlit", "NLP", "RSS"],
    category: "ml",
    github: "https://github.com/Anson-1/hk-news-sentiment",
    demo: "https://anson-1-hk-news-sentiment-app-z5ehud.streamlit.app/",
    status: "completed",
  },
  {
    title: "RL Crypto Portfolio Optimizer",
    slug: "rl-crypto-portfolio",
    description:
      "Deep reinforcement learning engine for multi-asset cryptocurrency portfolio optimization using PPO, SAC, and TD3 algorithms.",
    longDescription:
      "Built a complete RL-based portfolio management system that trades BTC, ETH, SOL, and BNB. Features differential Sharpe ratio rewards (Moody & Saffell 2001), LSTM/Transformer policy networks, drawdown and turnover penalties, and a Streamlit dashboard for live monitoring.",
    highlights: [
      "PPO, SAC, and TD3 agents with MLP, LSTM, and Transformer encoders",
      "Differential Sharpe ratio reward function with drawdown penalties",
      "Custom Gymnasium environment for multi-asset portfolio management",
      "Streamlit dashboard for training visualization and live monitoring",
      "Backtesting engine with risk-adjusted performance metrics",
    ],
    tags: ["Python", "PyTorch", "Stable-Baselines3", "Gymnasium", "ccxt", "Streamlit"],
    category: "quant",
    github: "https://github.com/Anson-1/quant-rl-portfolio",
    status: "in-progress",
  },
  {
    title: "Deep Learning Lab",
    slug: "pytorch-project",
    description:
      "Collection of PyTorch implementations: ResNet on CIFAR-10, BERT fine-tuning, VAE, diffusion models, LSTM, and Transformer from scratch.",
    longDescription:
      "A comprehensive deep learning project covering core architectures implemented in PyTorch. Includes ResNet trained on CIFAR-10, BERT fine-tuned for spam classification, Variational Autoencoder, score-based diffusion models (score matching + SDE), custom LSTM and Transformer implementations, and U-Net trained on Oxford Pets for image segmentation. Built as part of HKUST MSBD5012 coursework.",
    highlights: [
      "ResNet on CIFAR-10 with PyTorch Lightning training pipeline",
      "BERT fine-tuning for spam classification (Hugging Face Transformers)",
      "Variational Autoencoder (VAE) for generative modeling",
      "Score-based diffusion models with SDE formulation",
      "Custom LSTM and Transformer built from scratch",
      "U-Net for Oxford Pets image segmentation",
    ],
    tags: ["Python", "PyTorch", "Transformers", "Lightning", "Deep Learning"],
    category: "ml",
    github: "https://github.com/Anson-1/Pytorch_Project",
    status: "completed",
  },
  {
    title: "Real-time Data Pipeline",
    slug: "realtime-data-pipeline",
    description:
      "End-to-end streaming pipeline processing financial market data with Redpanda, TimescaleDB, and Grafana.",
    longDescription:
      "Designed and implemented a real-time data pipeline using Redpanda (Kafka-compatible) for message streaming, Python consumers for VWAP and moving average computation, TimescaleDB for time-series storage, and Grafana for real-time dashboards. Entire stack runs via docker-compose.",
    highlights: [
      "Redpanda (Kafka-compatible) for lightweight message streaming",
      "Python producer fetching live stock prices via yfinance",
      "Real-time VWAP and moving average computation",
      "TimescaleDB for optimized time-series storage",
      "Grafana dashboard with real-time charts",
      "Single docker-compose.yml spins up entire stack",
    ],
    tags: ["Redpanda", "Docker", "TimescaleDB", "Grafana", "Python"],
    category: "data-eng",
    status: "planned",
  },
];

export const categories = {
  all: "All Projects",
  ml: "ML / Data Science",
  "data-eng": "Data Engineering",
  quant: "Quant / Finance",
  fullstack: "Full Stack",
} as const;
