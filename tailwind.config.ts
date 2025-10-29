import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				// Original shadcn colors
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// WePlay brand colors
				weplay: {
					primary: 'hsl(var(--weplay-primary))',      // Hot Pink
					dark: 'hsl(var(--weplay-dark))',           // Indigo Violet  
					light: 'hsl(var(--weplay-light))',         // Lavender
					card: 'hsl(var(--weplay-card))',           // Azure
					text: 'hsl(var(--weplay-text))',           // Aubergine
					'text-medium': 'hsl(var(--weplay-text-medium))', // Raven
					accent: 'hsl(var(--weplay-accent))',       // Light Slate Blue
					'accent-light': 'hsl(var(--weplay-accent-light))' // Snuff
				},
				knvb: {
					'primary-orange': 'hsl(var(--knvb-primary-orange))',    // #F97316 Fris warm oranje
					'orange-dark': 'hsl(var(--knvb-orange-dark))',          // #EA580C Hover states
					'bg-light': 'hsl(var(--knvb-bg-light))',                // #FFFFFF Hoofdachtergrond
					'bg-alt': 'hsl(var(--knvb-bg-alt))',                    // #FAFAFA Alternatief
					'card-light': 'hsl(var(--knvb-card-light))',            // #FFFFFF Witte kaarten
					'text-dark': 'hsl(var(--knvb-text-dark))',              // #111827 Koppen
					'text-body': 'hsl(var(--knvb-text-body))',              // #374151 Body tekst
					'text-medium': 'hsl(var(--knvb-text-medium))',          // #6B7280 Subtiele tekst
					'border-light': 'hsl(var(--knvb-border-light))',        // #E5E7EB Borders
					'dark-bg': 'hsl(var(--knvb-dark-bg))',                  // #111827 Dark section bg
					'dark-bg-deep': 'hsl(var(--knvb-dark-bg-deep))',        // #030712 Deep dark
					'dark-card': 'hsl(var(--knvb-dark-card))',              // #1F2937 Dark cards
					'dark-text': 'hsl(var(--knvb-dark-text))',              // #FFFFFF Dark text
					'dark-text-muted': 'hsl(var(--knvb-dark-text-muted))',  // #D1D5DB Dark muted
					'dark-border': 'hsl(var(--knvb-dark-border))',          // #374151 Dark borders
				}
			},
			fontFamily: {
				sans: ['Open Sans', 'system-ui', '-apple-system', 'sans-serif'],
				heading: ['Montserrat', 'system-ui', '-apple-system', 'sans-serif'],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'neon-glow': {
					'0%, 100%': { boxShadow: '0 0 20px rgba(233, 0, 199, 0.4)' },
					'50%': { boxShadow: '0 0 30px rgba(233, 0, 199, 0.6)' }
				},
				'bounce-slow': {
					'0%, 20%, 53%, 80%, 100%': { transform: 'translate3d(0,0,0)' },
					'40%, 43%': { transform: 'translate3d(0, -10px, 0)' }
				},
				'pulse-slow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'neon-glow': 'neon-glow 2s ease-in-out infinite alternate',
				'bounce-slow': 'bounce-slow 2s ease-in-out infinite',
				'pulse-slow': 'pulse-slow 3s ease-in-out infinite',
			},
			boxShadow: {
				'weplay-glow': '0 0 20px rgba(233, 0, 199, 0.3)',
				'weplay-glow-strong': '0 0 30px rgba(233, 0, 199, 0.5)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
