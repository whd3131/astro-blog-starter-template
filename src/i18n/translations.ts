export const SUPPORTED_LOCALES = [
	"zh-CN",
	"zh-TW",
	"en",
	"de",
	"fr",
	"ja",
	"ko",
	"pt",
	"tr",
	"es",
	"ru",
] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

type Stat = {
	value: string;
	label: string;
};

type Feature = {
	title: string;
	description: string;
};

type Translation = {
	metaTitle: string;
	metaDescription: string;
	nav: {
		brandTagline: string;
		languageLabel: string;
		login: string;
	};
	hero: {
		eyebrow: string;
		title: string;
		description: string;
		primaryAction: string;
		secondaryAction: string;
	};
	stats: Stat[];
	panel: {
		overline: string;
		title: string;
		description: string;
		points: string[];
	};
	providers: {
		label: string;
		title: string;
		description: string;
	};
	features: {
		label: string;
		title: string;
		items: Feature[];
	};
	footer: string;
};

export const DEFAULT_LOCALE: Locale = "zh-CN";

export const localeLabels: Record<Locale, string> = {
	"zh-CN": "简体中文",
	"zh-TW": "繁體中文",
	en: "English",
	de: "Deutsch",
	fr: "Français",
	ja: "日本語",
	ko: "한국어",
	pt: "Português",
	tr: "Türkçe",
	es: "Español",
	ru: "Русский",
};

const localeMap = new Map<string, Locale>(
	SUPPORTED_LOCALES.map((locale) => [locale.toLowerCase(), locale]),
);

const localeAliases: Record<string, Locale> = {
	zh: "zh-CN",
	"zh-cn": "zh-CN",
	"zh-sg": "zh-CN",
	"zh-hans": "zh-CN",
	"zh-hans-cn": "zh-CN",
	"zh-hans-sg": "zh-CN",
	"zh-tw": "zh-TW",
	"zh-hk": "zh-TW",
	"zh-mo": "zh-TW",
	"zh-hant": "zh-TW",
	"zh-hant-tw": "zh-TW",
	"zh-hant-hk": "zh-TW",
	"en-us": "en",
	"en-gb": "en",
	"en-ca": "en",
	"en-au": "en",
	"de-de": "de",
	"de-at": "de",
	"de-ch": "de",
	"fr-fr": "fr",
	"fr-ca": "fr",
	"fr-be": "fr",
	"ja-jp": "ja",
	"ko-kr": "ko",
	"pt-br": "pt",
	"pt-pt": "pt",
	"tr-tr": "tr",
	"es-es": "es",
	"es-mx": "es",
	"es-ar": "es",
	"ru-ru": "ru",
};

export function resolveLocale(value?: string | null): Locale | undefined {
	if (!value) {
		return undefined;
	}

	const normalized = value.trim().replaceAll("_", "-").toLowerCase();

	return (
		localeMap.get(normalized) ??
		localeAliases[normalized] ??
		localeMap.get(normalized.split("-")[0]) ??
		localeAliases[normalized.split("-")[0]]
	);
}

export function detectLocaleFromHeader(header?: string | null): Locale {
	if (!header) {
		return DEFAULT_LOCALE;
	}

	for (const token of header.split(",")) {
		const locale = resolveLocale(token.split(";")[0]);
		if (locale) {
			return locale;
		}
	}

	return DEFAULT_LOCALE;
}

export const providerNames = [
	"Claude",
	"Claude Code",
	"GPT",
	"Codex",
	"Gemini",
	"Azure OpenAI",
] as const;

export const translations = {
	"zh-CN": {
		metaTitle: "ZShipCode | 全球领先的 AI API 聚合平台",
		metaDescription:
			"ZShipCode 全球领先的AI API 聚合平台，一站式接入Claude、Claude Code、GPT、Codex、Gemini、Azure OpenAI 等主流AI 服务，为全球开发者提供稳定高效的API 服务。",
		nav: {
			brandTagline: "AI API 聚合平台",
			languageLabel: "选择语言",
			login: "登录",
		},
		hero: {
			eyebrow: "面向全球开发者的一体化 AI API 接入",
			title: "全球领先的 AI API 聚合平台",
			description:
				"ZShipCode 全球领先的AI API 聚合平台，一站式接入Claude、Claude Code、GPT、Codex、Gemini、Azure OpenAI 等主流AI 服务，为全球开发者提供稳定高效的API 服务。",
			primaryAction: "立即登录",
			secondaryAction: "查看平台优势",
		},
		stats: [
			{ value: "1", label: "统一 API 接入层" },
			{ value: "10+", label: "主流 AI 服务能力" },
			{ value: "全球", label: "面向全球开发团队" },
		],
		panel: {
			overline: "为产品与工程团队而生",
			title: "统一入口，减少接入成本",
			description:
				"用一个平台管理模型接入、切换与扩展，把复杂的多供应商调用收敛成更稳定、更清晰的交付路径。",
			points: [
				"单一平台接入多家主流模型服务",
				"统一接口体验，降低切换与维护成本",
				"适配应用、Agent 与内部工具场景",
			],
		},
		providers: {
			label: "AI 服务",
			title: "主流 AI 服务，一站式接入",
			description: "从模型接入到服务切换，保持一致的开发体验。",
		},
		features: {
			label: "平台优势",
			title: "为什么团队选择 ZShipCode",
			items: [
				{
					title: "一站式聚合",
					description:
						"在同一平台接入 Claude、Claude Code、GPT、Codex、Gemini、Azure OpenAI 等服务，减少重复集成工作。",
				},
				{
					title: "稳定高效",
					description: "用统一的平台层承接请求、凭证与服务切换，让交付链路更稳更省心。",
				},
				{
					title: "面向全球开发",
					description:
						"适用于产品功能、Agent 工作流、研发工具和跨区域工程团队，加快 AI 能力落地。",
				},
			],
		},
		footer: "ZShipCode 让全球开发者用一个入口，更高效地接入主流 AI 服务。",
	},
	"zh-TW": {
		metaTitle: "ZShipCode | 全球領先的 AI API 聚合平台",
		metaDescription:
			"ZShipCode 是全球領先的 AI API 聚合平台，一站式接入 Claude、Claude Code、GPT、Codex、Gemini、Azure OpenAI 等主流 AI 服務，為全球開發者提供穩定高效的 API 服務。",
		nav: {
			brandTagline: "AI API 聚合平台",
			languageLabel: "選擇語言",
			login: "登入",
		},
		hero: {
			eyebrow: "面向全球開發者的一體化 AI API 接入",
			title: "全球領先的 AI API 聚合平台",
			description:
				"ZShipCode 是全球領先的 AI API 聚合平台，一站式接入 Claude、Claude Code、GPT、Codex、Gemini、Azure OpenAI 等主流 AI 服務，為全球開發者提供穩定高效的 API 服務。",
			primaryAction: "立即登入",
			secondaryAction: "查看平台優勢",
		},
		stats: [
			{ value: "1", label: "統一 API 接入層" },
			{ value: "10+", label: "主流 AI 服務能力" },
			{ value: "全球", label: "面向全球開發團隊" },
		],
		panel: {
			overline: "為產品與工程團隊打造",
			title: "統一入口，降低接入成本",
			description:
				"用一個平台管理模型接入、切換與擴展，將複雜的多供應商調用收斂成更穩定、更清晰的交付路徑。",
			points: [
				"單一平台接入多家主流模型服務",
				"統一介面體驗，降低切換與維護成本",
				"適配應用、Agent 與內部工具場景",
			],
		},
		providers: {
			label: "AI 服務",
			title: "主流 AI 服務，一站式接入",
			description: "從模型接入到服務切換，保持一致的開發體驗。",
		},
		features: {
			label: "平台優勢",
			title: "團隊選擇 ZShipCode 的原因",
			items: [
				{
					title: "一站式聚合",
					description:
						"在同一平台接入 Claude、Claude Code、GPT、Codex、Gemini、Azure OpenAI 等服務，減少重複整合工作。",
				},
				{
					title: "穩定高效",
					description: "用統一的平台層承接請求、憑證與服務切換，讓交付鏈路更穩更省心。",
				},
				{
					title: "面向全球開發",
					description:
						"適用於產品功能、Agent 工作流、研發工具與跨區域工程團隊，加快 AI 能力落地。",
				},
			],
		},
		footer: "ZShipCode 讓全球開發者用一個入口，更高效地接入主流 AI 服務。",
	},
	en: {
		metaTitle: "ZShipCode | The Leading Global AI API Aggregation Platform",
		metaDescription:
			"ZShipCode is the leading global AI API aggregation platform, offering one-stop access to Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI, and other mainstream AI services with stable, efficient APIs for developers worldwide.",
		nav: {
			brandTagline: "AI API Gateway",
			languageLabel: "Select language",
			login: "Log in",
		},
		hero: {
			eyebrow: "Unified AI API access for global builders",
			title: "The Leading Global AI API Aggregation Platform",
			description:
				"ZShipCode is the leading global AI API aggregation platform, offering one-stop access to Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI, and other mainstream AI services with stable, efficient APIs for developers worldwide.",
			primaryAction: "Log in now",
			secondaryAction: "Explore platform strengths",
		},
		stats: [
			{ value: "1", label: "Unified API entry" },
			{ value: "10+", label: "Mainstream AI services" },
			{ value: "Global", label: "Built for developer teams" },
		],
		panel: {
			overline: "Built for product and engineering teams",
			title: "One entry point, lower integration cost",
			description:
				"Manage model access, switching, and expansion through one platform layer so multi-vendor AI delivery stays clearer, steadier, and easier to scale.",
			points: [
				"Access major model providers through one platform",
				"Keep a consistent API experience across services",
				"Fit for apps, agents, and internal tooling",
			],
		},
		providers: {
			label: "AI Services",
			title: "Mainstream AI services, connected in one place",
			description: "From model access to service switching, keep one consistent developer experience.",
		},
		features: {
			label: "Platform Strengths",
			title: "Why teams choose ZShipCode",
			items: [
				{
					title: "One-stop aggregation",
					description:
						"Connect Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI, and more from a single platform instead of repeating integrations.",
				},
				{
					title: "Stable and efficient delivery",
					description:
						"Handle requests, credentials, and provider switching through one platform layer to keep production paths cleaner and more dependable.",
				},
				{
					title: "Built for global developers",
					description:
						"Support product features, agent workflows, engineering tooling, and cross-region teams with faster AI rollout.",
				},
			],
		},
		footer: "ZShipCode gives global developers one entry point for mainstream AI services.",
	},
	de: {
		metaTitle: "ZShipCode | Die weltweit führende AI-API-Aggregationsplattform",
		metaDescription:
			"ZShipCode ist die weltweit führende AI-API-Aggregationsplattform und bietet zentralen Zugang zu Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI und weiteren wichtigen AI-Diensten für Entwickler weltweit.",
		nav: {
			brandTagline: "AI-API-Plattform",
			languageLabel: "Sprache wählen",
			login: "Anmelden",
		},
		hero: {
			eyebrow: "Vereinheitlichter AI-API-Zugang für Entwickler weltweit",
			title: "Die weltweit führende AI-API-Aggregationsplattform",
			description:
				"ZShipCode ist die weltweit führende AI-API-Aggregationsplattform und bietet zentralen Zugang zu Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI und weiteren wichtigen AI-Diensten für Entwickler weltweit.",
			primaryAction: "Jetzt anmelden",
			secondaryAction: "Plattformvorteile ansehen",
		},
		stats: [
			{ value: "1", label: "Einheitlicher API-Zugang" },
			{ value: "10+", label: "Wichtige AI-Dienste" },
			{ value: "Weltweit", label: "Für Entwicklerteams weltweit" },
		],
		panel: {
			overline: "Für Produkt- und Engineering-Teams",
			title: "Ein Einstiegspunkt, geringerer Integrationsaufwand",
			description:
				"Steuern Sie Modellzugang, Wechsel und Erweiterung über eine Plattformschicht, damit Multi-Vendor-AI klarer, stabiler und einfacher skalierbar bleibt.",
			points: [
				"Zugriff auf führende Modellanbieter über eine Plattform",
				"Ein konsistentes API-Erlebnis über mehrere Dienste hinweg",
				"Geeignet für Apps, Agenten und interne Tools",
			],
		},
		providers: {
			label: "AI-Dienste",
			title: "Wichtige AI-Dienste an einem Ort",
			description: "Von der Modellanbindung bis zum Dienstwechsel mit konsistenter Developer Experience.",
		},
		features: {
			label: "Plattformstärken",
			title: "Warum Teams ZShipCode wählen",
			items: [
				{
					title: "Zentrale Aggregation",
					description:
						"Integrieren Sie Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI und weitere Dienste über eine einzige Plattform statt mehrfacher Einzelanbindungen.",
				},
				{
					title: "Stabil und effizient",
					description:
						"Führen Sie Requests, Credentials und Provider-Wechsel auf einer Plattformschicht zusammen und halten Sie Produktionspfade sauberer und verlässlicher.",
				},
				{
					title: "Für globale Entwickler gebaut",
					description:
						"Unterstützt Produktfunktionen, Agent-Workflows, Engineering-Tools und verteilte Teams bei der schnelleren AI-Einführung.",
				},
			],
		},
		footer: "ZShipCode bietet globalen Entwicklern einen zentralen Zugang zu wichtigen AI-Diensten.",
	},
	fr: {
		metaTitle: "ZShipCode | La plateforme mondiale leader d'agrégation d'API IA",
		metaDescription:
			"ZShipCode est la plateforme mondiale leader d'agrégation d'API IA, avec un accès unifié à Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI et d'autres services IA majeurs pour les développeurs du monde entier.",
		nav: {
			brandTagline: "Passerelle API IA",
			languageLabel: "Choisir la langue",
			login: "Se connecter",
		},
		hero: {
			eyebrow: "Accès unifié aux API IA pour les développeurs du monde entier",
			title: "La plateforme mondiale leader d'agrégation d'API IA",
			description:
				"ZShipCode est la plateforme mondiale leader d'agrégation d'API IA, avec un accès unifié à Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI et d'autres services IA majeurs pour les développeurs du monde entier.",
			primaryAction: "Se connecter",
			secondaryAction: "Découvrir la plateforme",
		},
		stats: [
			{ value: "1", label: "Entrée API unifiée" },
			{ value: "10+", label: "Services IA majeurs" },
			{ value: "Monde", label: "Pensé pour les équipes dev" },
		],
		panel: {
			overline: "Conçu pour les équipes produit et engineering",
			title: "Un seul point d'entrée, moins de coût d'intégration",
			description:
				"Centralisez l'accès, le basculement et l'extension des modèles dans une seule couche de plateforme pour simplifier et stabiliser les déploiements multi-fournisseurs.",
			points: [
				"Accès aux principaux fournisseurs de modèles via une seule plateforme",
				"Une expérience API cohérente entre plusieurs services",
				"Adapté aux applications, agents et outils internes",
			],
		},
		providers: {
			label: "Services IA",
			title: "Les services IA majeurs, connectés au même endroit",
			description: "De l'accès aux modèles au changement de service, gardez une expérience développeur cohérente.",
		},
		features: {
			label: "Atouts plateforme",
			title: "Pourquoi les équipes choisissent ZShipCode",
			items: [
				{
					title: "Agrégation tout-en-un",
					description:
						"Connectez Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI et d'autres services depuis une seule plateforme au lieu de répéter les intégrations.",
				},
				{
					title: "Stable et efficace",
					description:
						"Centralisez les requêtes, les identifiants et le changement de fournisseur dans une seule couche afin de garder des flux de production plus propres et plus fiables.",
				},
				{
					title: "Pensé pour les développeurs globaux",
					description:
						"Accélérez le déploiement de l'IA pour les fonctionnalités produit, les workflows d'agents, les outils d'ingénierie et les équipes distribuées.",
				},
			],
		},
		footer: "ZShipCode offre aux développeurs du monde entier un point d'entrée unique vers les principaux services IA.",
	},
	ja: {
		metaTitle: "ZShipCode | 世界をリードする AI API アグリゲーションプラットフォーム",
		metaDescription:
			"ZShipCode は世界をリードする AI API アグリゲーションプラットフォームであり、Claude、Claude Code、GPT、Codex、Gemini、Azure OpenAI など主要な AI サービスへワンストップで接続できます。",
		nav: {
			brandTagline: "AI API ゲートウェイ",
			languageLabel: "言語を選択",
			login: "ログイン",
		},
		hero: {
			eyebrow: "世界中の開発者に向けた統合 AI API アクセス",
			title: "世界をリードする AI API アグリゲーションプラットフォーム",
			description:
				"ZShipCode は世界をリードする AI API アグリゲーションプラットフォームであり、Claude、Claude Code、GPT、Codex、Gemini、Azure OpenAI など主要な AI サービスへワンストップで接続できます。",
			primaryAction: "今すぐログイン",
			secondaryAction: "プラットフォームを見る",
		},
		stats: [
			{ value: "1", label: "統合 API エントリ" },
			{ value: "10+", label: "主要 AI サービス" },
			{ value: "世界", label: "グローバル開発チーム向け" },
		],
		panel: {
			overline: "プロダクトチームと開発チーム向け",
			title: "入口を一つに、統合コストを削減",
			description:
				"モデル接続、切り替え、拡張を一つのプラットフォーム層で管理し、複数ベンダー構成でも安定した分かりやすい運用を実現します。",
			points: [
				"主要モデルプロバイダーへ単一プラットフォームで接続",
				"複数サービスでも一貫した API 体験を維持",
				"アプリ、エージェント、社内ツールに対応",
			],
		},
		providers: {
			label: "AI サービス",
			title: "主要 AI サービスをワンストップで接続",
			description: "モデル接続からサービス切り替えまで、一貫した開発体験を保ちます。",
		},
		features: {
			label: "プラットフォームの強み",
			title: "ZShipCode が選ばれる理由",
			items: [
				{
					title: "ワンストップ集約",
					description:
						"Claude、Claude Code、GPT、Codex、Gemini、Azure OpenAI などを一つのプラットフォームで接続し、重複した統合作業を減らします。",
				},
				{
					title: "安定かつ効率的",
					description:
						"リクエスト、認証情報、プロバイダー切り替えを一つのレイヤーに集約し、運用経路をよりクリーンで信頼性の高いものにします。",
				},
				{
					title: "グローバル開発向け",
					description:
						"プロダクト機能、エージェントワークフロー、開発ツール、分散チームの AI 展開を加速します。",
				},
			],
		},
		footer: "ZShipCode は主要 AI サービスへの単一入口を世界中の開発者に提供します。",
	},
	ko: {
		metaTitle: "ZShipCode | 글로벌 선도 AI API 집계 플랫폼",
		metaDescription:
			"ZShipCode는 글로벌 선도 AI API 집계 플랫폼으로 Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI 등 주요 AI 서비스를 한 번에 연결하고 전 세계 개발자에게 안정적이고 효율적인 API 서비스를 제공합니다.",
		nav: {
			brandTagline: "AI API 게이트웨이",
			languageLabel: "언어 선택",
			login: "로그인",
		},
		hero: {
			eyebrow: "전 세계 개발자를 위한 통합 AI API 액세스",
			title: "글로벌 선도 AI API 집계 플랫폼",
			description:
				"ZShipCode는 글로벌 선도 AI API 집계 플랫폼으로 Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI 등 주요 AI 서비스를 한 번에 연결하고 전 세계 개발자에게 안정적이고 효율적인 API 서비스를 제공합니다.",
			primaryAction: "지금 로그인",
			secondaryAction: "플랫폼 강점 보기",
		},
		stats: [
			{ value: "1", label: "통합 API 진입점" },
			{ value: "10+", label: "주요 AI 서비스" },
			{ value: "글로벌", label: "글로벌 개발팀 지원" },
		],
		panel: {
			overline: "제품팀과 엔지니어링팀을 위해 설계",
			title: "하나의 진입점으로 통합 비용 절감",
			description:
				"모델 연결, 전환, 확장을 하나의 플랫폼 계층에서 관리해 멀티 벤더 AI 운영을 더 안정적이고 명확하게 유지합니다.",
			points: [
				"주요 모델 공급자를 하나의 플랫폼에서 연결",
				"여러 서비스에서도 일관된 API 경험 유지",
				"앱, 에이전트, 내부 도구에 적합",
			],
		},
		providers: {
			label: "AI 서비스",
			title: "주요 AI 서비스를 한 곳에서 연결",
			description: "모델 연결부터 서비스 전환까지 일관된 개발자 경험을 유지합니다.",
		},
		features: {
			label: "플랫폼 강점",
			title: "팀이 ZShipCode를 선택하는 이유",
			items: [
				{
					title: "원스톱 집계",
					description:
						"Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI 등을 하나의 플랫폼에서 연결해 중복 통합 작업을 줄입니다.",
				},
				{
					title: "안정적이고 효율적",
					description:
						"요청, 자격 증명, 공급자 전환을 하나의 플랫폼 계층에서 처리해 운영 경로를 더 깔끔하고 신뢰 가능하게 유지합니다.",
				},
				{
					title: "글로벌 개발 중심",
					description:
						"제품 기능, 에이전트 워크플로, 엔지니어링 도구, 분산 팀의 AI 도입 속도를 높입니다.",
				},
			],
		},
		footer: "ZShipCode는 주요 AI 서비스로 향하는 하나의 진입점을 전 세계 개발자에게 제공합니다.",
	},
	pt: {
		metaTitle: "ZShipCode | A principal plataforma global de agregação de APIs de IA",
		metaDescription:
			"ZShipCode é a principal plataforma global de agregação de APIs de IA, com acesso unificado a Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI e outros serviços de IA para desenvolvedores no mundo todo.",
		nav: {
			brandTagline: "Gateway de API de IA",
			languageLabel: "Selecionar idioma",
			login: "Entrar",
		},
		hero: {
			eyebrow: "Acesso unificado a APIs de IA para equipes globais",
			title: "A principal plataforma global de agregação de APIs de IA",
			description:
				"ZShipCode é a principal plataforma global de agregação de APIs de IA, com acesso unificado a Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI e outros serviços de IA para desenvolvedores no mundo todo.",
			primaryAction: "Entrar agora",
			secondaryAction: "Ver diferenciais",
		},
		stats: [
			{ value: "1", label: "Entrada API unificada" },
			{ value: "10+", label: "Serviços de IA principais" },
			{ value: "Global", label: "Feito para times dev" },
		],
		panel: {
			overline: "Feito para produto e engenharia",
			title: "Um ponto de entrada, menor custo de integração",
			description:
				"Gerencie acesso, troca e expansão de modelos em uma única camada de plataforma para manter operações multi-fornecedor mais claras e estáveis.",
			points: [
				"Acesse grandes provedores de modelos por uma única plataforma",
				"Mantenha uma experiência de API consistente entre serviços",
				"Adequado para apps, agentes e ferramentas internas",
			],
		},
		providers: {
			label: "Serviços de IA",
			title: "Serviços de IA conectados em um só lugar",
			description: "Do acesso a modelos à troca de serviços, mantenha uma experiência consistente para desenvolvedores.",
		},
		features: {
			label: "Forças da plataforma",
			title: "Por que as equipes escolhem a ZShipCode",
			items: [
				{
					title: "Agregação em um só lugar",
					description:
						"Conecte Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI e mais em uma única plataforma, sem repetir integrações.",
				},
				{
					title: "Estável e eficiente",
					description:
						"Concentre requisições, credenciais e troca de provedores em uma camada única para manter fluxos de produção mais limpos e confiáveis.",
				},
				{
					title: "Feita para desenvolvedores globais",
					description:
						"Acelere a entrega de IA em recursos de produto, workflows de agentes, ferramentas de engenharia e equipes distribuídas.",
				},
			],
		},
		footer: "ZShipCode oferece aos desenvolvedores globais um ponto de entrada único para os principais serviços de IA.",
	},
	tr: {
		metaTitle: "ZShipCode | Dünyanın önde gelen AI API toplulaştırma platformu",
		metaDescription:
			"ZShipCode, Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI ve diğer yaygın AI servislerine tek noktadan erişim sağlayan, geliştiriciler için kurulmuş lider global AI API toplulaştırma platformudur.",
		nav: {
			brandTagline: "AI API geçidi",
			languageLabel: "Dil seçin",
			login: "Giriş yap",
		},
		hero: {
			eyebrow: "Küresel geliştirici ekipleri için birleşik AI API erişimi",
			title: "Dünyanın önde gelen AI API toplulaştırma platformu",
			description:
				"ZShipCode, Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI ve diğer yaygın AI servislerine tek noktadan erişim sağlayan, geliştiriciler için kurulmuş lider global AI API toplulaştırma platformudur.",
			primaryAction: "Hemen giriş yap",
			secondaryAction: "Platform avantajlarını incele",
		},
		stats: [
			{ value: "1", label: "Birleşik API giriş noktası" },
			{ value: "10+", label: "Yaygın AI servisleri" },
			{ value: "Küresel", label: "Küresel geliştirici takımları için" },
		],
		panel: {
			overline: "Ürün ve mühendislik ekipleri için tasarlandı",
			title: "Tek giriş noktası, daha düşük entegrasyon maliyeti",
			description:
				"Model erişimi, geçiş ve genişlemeyi tek bir platform katmanında yöneterek çoklu sağlayıcı AI operasyonlarını daha net ve daha istikrarlı hale getirin.",
			points: [
				"Başlıca model sağlayıcılarına tek platformdan erişin",
				"Servisler arasında tutarlı bir API deneyimi koruyun",
				"Uygulamalar, ajanlar ve iç araçlar için uygun",
			],
		},
		providers: {
			label: "AI servisleri",
			title: "Yaygın AI servisleri tek yerde",
			description: "Model erişiminden servis değişimine kadar tutarlı bir geliştirici deneyimi sağlayın.",
		},
		features: {
			label: "Platform gücü",
			title: "Takımlar neden ZShipCode'u seçiyor",
			items: [
				{
					title: "Tek noktadan toplulaştırma",
					description:
						"Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI ve daha fazlasını tek platformdan bağlayarak tekrar eden entegrasyon yükünü azaltın.",
				},
				{
					title: "İstikrarlı ve verimli",
					description:
						"İstekleri, kimlik bilgilerini ve sağlayıcı geçişlerini tek platform katmanında yöneterek üretim akışlarını daha temiz ve daha güvenilir tutun.",
				},
				{
					title: "Küresel geliştiriciler için",
					description:
						"Ürün özellikleri, ajan iş akışları, mühendislik araçları ve dağınık ekiplerde AI yaygınlaştırmasını hızlandırın.",
				},
			],
		},
		footer: "ZShipCode, küresel geliştiricilere başlıca AI servisleri için tek bir giriş noktası sunar.",
	},
	es: {
		metaTitle: "ZShipCode | La plataforma líder global de agregación de API de IA",
		metaDescription:
			"ZShipCode es la plataforma líder global de agregación de API de IA y ofrece acceso unificado a Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI y otros servicios de IA para desarrolladores de todo el mundo.",
		nav: {
			brandTagline: "Gateway de API de IA",
			languageLabel: "Seleccionar idioma",
			login: "Iniciar sesión",
		},
		hero: {
			eyebrow: "Acceso unificado a API de IA para equipos globales",
			title: "La plataforma líder global de agregación de API de IA",
			description:
				"ZShipCode es la plataforma líder global de agregación de API de IA y ofrece acceso unificado a Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI y otros servicios de IA para desarrolladores de todo el mundo.",
			primaryAction: "Entrar ahora",
			secondaryAction: "Ver fortalezas de la plataforma",
		},
		stats: [
			{ value: "1", label: "Entrada API unificada" },
			{ value: "10+", label: "Servicios de IA principales" },
			{ value: "Global", label: "Pensado para equipos dev" },
		],
		panel: {
			overline: "Creado para producto e ingeniería",
			title: "Un solo punto de entrada, menos costo de integración",
			description:
				"Gestiona acceso, cambio y ampliación de modelos desde una sola capa de plataforma para mantener operaciones multi proveedor más claras y estables.",
			points: [
				"Accede a los principales proveedores de modelos desde una sola plataforma",
				"Mantiene una experiencia de API coherente entre servicios",
				"Apto para apps, agentes y herramientas internas",
			],
		},
		providers: {
			label: "Servicios de IA",
			title: "Servicios de IA principales, conectados en un solo lugar",
			description: "Desde el acceso a modelos hasta el cambio de servicio, mantén una experiencia consistente para desarrolladores.",
		},
		features: {
			label: "Fortalezas de la plataforma",
			title: "Por qué los equipos eligen ZShipCode",
			items: [
				{
					title: "Agregación integral",
					description:
						"Conecta Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI y más desde una sola plataforma, sin repetir integraciones.",
				},
				{
					title: "Estable y eficiente",
					description:
						"Centraliza solicitudes, credenciales y cambios de proveedor en una sola capa para mantener flujos de producción más limpios y confiables.",
				},
				{
					title: "Hecho para desarrolladores globales",
					description:
						"Acelera la implementación de IA en funciones de producto, flujos de agentes, herramientas de ingeniería y equipos distribuidos.",
				},
			],
		},
		footer: "ZShipCode ofrece a los desarrolladores globales un único punto de entrada a los principales servicios de IA.",
	},
	ru: {
		metaTitle: "ZShipCode | Ведущая мировая платформа агрегации AI API",
		metaDescription:
			"ZShipCode - ведущая мировая платформа агрегации AI API с единым доступом к Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI и другим популярным AI-сервисам для разработчиков по всему миру.",
		nav: {
			brandTagline: "AI API шлюз",
			languageLabel: "Выберите язык",
			login: "Войти",
		},
		hero: {
			eyebrow: "Единый доступ к AI API для команд по всему миру",
			title: "Ведущая мировая платформа агрегации AI API",
			description:
				"ZShipCode - ведущая мировая платформа агрегации AI API с единым доступом к Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI и другим популярным AI-сервисам для разработчиков по всему миру.",
			primaryAction: "Войти сейчас",
			secondaryAction: "Посмотреть преимущества",
		},
		stats: [
			{ value: "1", label: "Единая точка входа API" },
			{ value: "10+", label: "Популярные AI-сервисы" },
			{ value: "Мир", label: "Для глобальных dev-команд" },
		],
		panel: {
			overline: "Для продуктовых и инженерных команд",
			title: "Один вход, ниже стоимость интеграции",
			description:
				"Управляйте доступом к моделям, переключением и масштабированием через единый платформенный слой, чтобы мультивендорная AI-инфраструктура оставалась понятной и стабильной.",
			points: [
				"Доступ к ведущим поставщикам моделей через одну платформу",
				"Единый API-опыт для разных сервисов",
				"Подходит для приложений, агентов и внутренних инструментов",
			],
		},
		providers: {
			label: "AI-сервисы",
			title: "Популярные AI-сервисы в одном месте",
			description: "От подключения моделей до переключения сервисов сохраняйте единый опыт для разработчиков.",
		},
		features: {
			label: "Сильные стороны платформы",
			title: "Почему команды выбирают ZShipCode",
			items: [
				{
					title: "Единая агрегация",
					description:
						"Подключайте Claude, Claude Code, GPT, Codex, Gemini, Azure OpenAI и другие сервисы через одну платформу вместо повторяющихся интеграций.",
				},
				{
					title: "Стабильно и эффективно",
					description:
						"Сведите запросы, учетные данные и переключение провайдеров в один слой платформы, чтобы сделать production-потоки чище и надежнее.",
				},
				{
					title: "Для глобальных разработчиков",
					description:
						"Ускоряйте запуск AI-функций, агентных сценариев, инженерных инструментов и распределенных команд.",
				},
			],
		},
		footer: "ZShipCode дает глобальным разработчикам одну точку входа к популярным AI-сервисам.",
	},
} satisfies Record<Locale, Translation>;
