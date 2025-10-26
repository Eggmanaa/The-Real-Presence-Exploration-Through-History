import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Flesh is True Food - The Real Presence in Scripture and Tradition</title>
        <meta name="description" content="A comprehensive scriptural and historical treatise on the Real Presence of Christ in the Eucharist, from Old Testament types through transubstantiation." />
        <style>{`
          /* Reset and Base Styles */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          :root {
            --red: #a20927;
            --white: #FFFFFF;
            --black: #000000;
            --light-grey: #DDDDDD;
            --cream: #FAF9F6;
            --gold: #D4AF37;
            --shadow: rgba(162, 9, 39, 0.1);
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: 'Georgia', 'Garamond', serif;
            line-height: 1.8;
            color: var(--black);
            background-color: var(--cream);
          }

          /* Hero Section */
          .hero {
            background: linear-gradient(135deg, var(--red) 0%, #8B0A1F 100%);
            color: var(--white);
            padding: 4rem 2rem;
            text-align: center;
            box-shadow: 0 4px 6px var(--shadow);
          }

          .hero-content h1 {
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
          }

          .subtitle {
            font-size: 1.3rem;
            font-style: italic;
            max-width: 800px;
            margin: 0 auto;
            opacity: 0.95;
          }

          /* Navigation */
          .main-nav {
            background-color: var(--white);
            padding: 1rem;
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.5rem;
            box-shadow: 0 2px 4px var(--shadow);
            position: sticky;
            top: 0;
            z-index: 100;
          }

          .main-nav a {
            color: var(--red);
            text-decoration: none;
            padding: 0.5rem 1rem;
            border: 2px solid var(--red);
            border-radius: 4px;
            font-weight: 600;
            transition: all 0.3s ease;
          }

          .main-nav a:hover {
            background-color: var(--red);
            color: var(--white);
          }

          /* Content Layout */
          .content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 2rem 1rem;
          }

          .section {
            margin-bottom: 4rem;
          }

          .section h2 {
            font-size: 2.5rem;
            color: var(--red);
            margin-bottom: 1.5rem;
            border-bottom: 3px solid var(--gold);
            padding-bottom: 0.5rem;
          }

          .section h3 {
            font-size: 1.8rem;
            color: var(--black);
            margin-top: 2rem;
            margin-bottom: 1rem;
          }

          .section h4 {
            font-size: 1.4rem;
            color: var(--red);
            margin-top: 1.5rem;
            margin-bottom: 0.8rem;
          }

          /* Cards */
          .card {
            background-color: var(--white);
            padding: 2rem;
            margin-bottom: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 6px var(--shadow);
            border-left: 5px solid var(--red);
          }

          .card.highlight {
            background-color: #FFF9F0;
            border-left-color: var(--gold);
          }

          .intro-card {
            background: linear-gradient(135deg, #FFF 0%, #FAF9F6 100%);
          }

          /* Typography */
          .lead {
            font-size: 1.3rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
            color: var(--red);
          }

          p {
            margin-bottom: 1rem;
          }

          /* Lists */
          ul, ol {
            margin-left: 2rem;
            margin-bottom: 1rem;
          }

          li {
            margin-bottom: 0.5rem;
          }

          .evidence-list li,
          .consensus-list li,
          .conclusion-list li {
            margin-bottom: 1rem;
          }

          /* Scripture Boxes */
          .scripture-box {
            background: linear-gradient(135deg, #FFF 0%, #F5F5F5 100%);
            border-left: 4px solid var(--gold);
            padding: 1.5rem;
            margin: 1.5rem 0;
            border-radius: 4px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          }

          .scripture-box.critical {
            border-left-color: var(--red);
            background: linear-gradient(135deg, #FFF5F5 0%, #FFE5E5 100%);
          }

          .verse {
            font-size: 1.15rem;
            font-style: italic;
            line-height: 1.6;
            color: var(--black);
          }

          /* Blockquotes */
          blockquote {
            background-color: #F9F9F9;
            border-left: 5px solid var(--red);
            padding: 1.5rem;
            margin: 1.5rem 0;
            font-style: italic;
            border-radius: 4px;
          }

          blockquote cite {
            display: block;
            margin-top: 1rem;
            font-style: normal;
            font-weight: 600;
            color: var(--red);
          }

          .key-quote {
            font-size: 1.25rem;
            background: linear-gradient(135deg, #FFF5F5 0%, #FFE5E5 100%);
            border-left-color: var(--gold);
            text-align: center;
          }

          .final-quote {
            font-size: 1.4rem;
            text-align: center;
            background: linear-gradient(135deg, var(--red) 0%, #8B0A1F 100%);
            color: var(--white);
            border: none;
            padding: 2rem;
          }

          .final-quote cite {
            color: var(--gold);
          }

          /* Insight Boxes */
          .insight {
            background-color: #E8F4F8;
            border-left: 4px solid #2196F3;
            padding: 1rem 1.5rem;
            margin: 1rem 0;
            border-radius: 4px;
          }

          .insight strong {
            color: #1976D2;
          }

          .reaction {
            background-color: #FFF3E0;
            border-left: 4px solid #FF9800;
            padding: 1rem 1.5rem;
            margin: 1rem 0;
            border-radius: 4px;
          }

          .reaction strong {
            color: #F57C00;
          }

          .rebuttal {
            background-color: #F3E5F5;
            border-left: 4px solid #9C27B0;
            padding: 1rem 1.5rem;
            margin: 1rem 0;
            border-radius: 4px;
          }

          .rebuttal strong {
            color: #7B1FA2;
          }

          .analysis {
            background-color: #E8F5E9;
            border-left: 4px solid #4CAF50;
            padding: 1rem 1.5rem;
            margin: 1rem 0;
            border-radius: 4px;
          }

          .analysis strong {
            color: #388E3C;
          }

          /* Tables */
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 1.5rem 0;
            background-color: var(--white);
            box-shadow: 0 2px 4px var(--shadow);
          }

          th {
            background-color: var(--red);
            color: var(--white);
            padding: 1rem;
            text-align: left;
            font-weight: 600;
          }

          td {
            padding: 1rem;
            border-bottom: 1px solid var(--light-grey);
          }

          tbody tr:hover {
            background-color: #FFF9F0;
          }

          .comparison-table th {
            text-align: center;
          }

          .comparison-table td {
            text-align: center;
          }

          .comparison-table strong {
            color: var(--red);
            font-size: 1.1rem;
          }

          /* Greek Text */
          .greek-text {
            background-color: #F5F5F5;
            padding: 1.5rem;
            margin: 1rem 0;
            text-align: center;
            border-radius: 4px;
            border: 2px solid var(--light-grey);
          }

          .greek-text p {
            margin-bottom: 0.5rem;
          }

          .greek-text strong {
            font-size: 1.5rem;
            color: var(--red);
          }

          .greek-text em {
            font-size: 1.2rem;
            color: #555;
          }

          /* Definition Box */
          .definition-box {
            background: linear-gradient(135deg, #FFF5F5 0%, #FFE5E5 100%);
            border: 3px solid var(--red);
            padding: 2rem;
            margin: 2rem 0;
            border-radius: 8px;
          }

          .definition-box h4 {
            color: var(--red);
            margin-top: 0;
          }

          .definition-box cite {
            display: block;
            margin-top: 1rem;
            font-weight: 600;
            color: var(--red);
          }

          /* Philosophy Box */
          .philosophy-box {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            margin: 2rem 0;
          }

          .concept {
            background-color: #F9F9F9;
            padding: 1.5rem;
            border-radius: 8px;
            border: 2px solid var(--light-grey);
          }

          .concept h5 {
            color: var(--red);
            font-size: 1.3rem;
            margin-bottom: 1rem;
          }

          .example {
            font-style: italic;
            color: #666;
            margin-top: 1rem;
          }

          /* Timeline */
          .timeline-container {
            margin: 2rem 0;
          }

          .timeline-item {
            position: relative;
            padding-left: 2rem;
            margin-bottom: 2rem;
          }

          .timeline-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 4px;
            height: 100%;
            background: linear-gradient(to bottom, var(--red) 0%, var(--gold) 100%);
          }

          .date {
            display: inline-block;
            background-color: var(--red);
            color: var(--white);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-weight: 600;
            margin-bottom: 0.5rem;
          }

          .context {
            font-style: italic;
            color: #666;
            margin-bottom: 1rem;
          }

          .timeline-wrapper {
            margin: 2rem 0;
          }

          .timeline-period {
            margin-bottom: 2rem;
          }

          .timeline-period h3 {
            color: var(--red);
            font-size: 1.6rem;
          }

          .timeline-list {
            list-style: none;
            margin-left: 0;
          }

          .timeline-list li {
            padding-left: 1.5rem;
            position: relative;
            margin-bottom: 0.8rem;
          }

          .timeline-list li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--red);
            font-weight: bold;
          }

          .major-event {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--red);
            text-align: center;
            margin: 1rem 0;
          }

          /* Summary Box */
          .summary-box {
            background: linear-gradient(135deg, #FFF5F5 0%, #FFE5E5 100%);
            border: 3px solid var(--gold);
          }

          .summary-box h3 {
            color: var(--red);
            margin-top: 0;
          }

          /* Conclusion Section */
          .conclusion .card {
            border-left-width: 8px;
          }

          .reflection-box {
            background-color: #FFF9F0;
            border: 2px solid var(--gold);
            padding: 1.5rem;
            margin: 2rem 0;
            border-radius: 8px;
          }

          .reflection-box p {
            font-weight: 600;
            color: var(--red);
            margin-bottom: 1rem;
          }

          .closing {
            font-size: 1.15rem;
            font-weight: 500;
            text-align: center;
            margin-top: 2rem;
            padding: 1rem;
            background-color: #FFF9F0;
            border-radius: 4px;
          }

          /* Resources Section */
          .resources-list {
            list-style: none;
            margin-left: 0;
          }

          .resources-list li {
            padding: 0.8rem 0;
            border-bottom: 1px solid var(--light-grey);
          }

          .resources-list li:last-child {
            border-bottom: none;
          }

          .resources-list strong {
            color: var(--red);
          }

          /* Footer */
          .site-footer {
            background: linear-gradient(135deg, var(--red) 0%, #8B0A1F 100%);
            color: var(--white);
            text-align: center;
            padding: 2rem;
            margin-top: 4rem;
          }

          .site-footer p {
            margin-bottom: 0.5rem;
          }

          .copyright {
            font-size: 0.9rem;
            opacity: 0.8;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .hero-content h1 {
              font-size: 2rem;
            }

            .subtitle {
              font-size: 1.1rem;
            }

            .main-nav {
              flex-direction: column;
            }

            .main-nav a {
              width: 100%;
              text-align: center;
            }

            .section h2 {
              font-size: 2rem;
            }

            .philosophy-box {
              grid-template-columns: 1fr;
            }

            table {
              font-size: 0.9rem;
            }

            th, td {
              padding: 0.5rem;
            }
          }

          /* Print Styles */
          @media print {
            .main-nav {
              display: none;
            }

            .hero {
              background: var(--red);
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }

            .card {
              page-break-inside: avoid;
            }
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  )
})
