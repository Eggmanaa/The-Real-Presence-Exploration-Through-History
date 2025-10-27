import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#a20927" />
        <title>My Flesh is True Food - The Real Presence in Scripture and Tradition</title>
        <meta name="description" content="A comprehensive scriptural and historical treatise on the Real Presence of Christ in the Eucharist, from Old Testament types through transubstantiation." />
        
        {/* Open Graph meta tags for social sharing */}
        <meta property="og:title" content="The Real Presence: A Journey Through Scripture and Tradition" />
        <meta property="og:description" content="Exploring the doctrine of transubstantiation from Old Testament types through Church Fathers to formal definition" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://therealpresence.pages.dev" />
        
        {/* Twitter Card meta tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Real Presence in Scripture and Tradition" />
        <meta name="twitter:description" content="A comprehensive treatise on the Real Presence of Christ in the Eucharist" />
        <style>{`
          /* Reset and Base Styles */
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          *::before,
          *::after {
            box-sizing: border-box;
          }

          img,
          picture,
          video,
          canvas,
          svg {
            display: block;
            max-width: 100%;
            height: auto;
          }

          input,
          button,
          textarea,
          select {
            font: inherit;
          }

          :root {
            /* School branding colors */
            --primary-red: #a20927;
            --white: #FFFFFF;
            --black: #000000;
            --light-grey: #DDDDDD;
            --off-white: #FAF9F6;
            --cream: #FAF9F6;
            --gold: #D4AF37;
            --light-blue: #E3F2FD;
            --soft-green: #E8F5E9;
            --soft-purple: #F3E5F5;
            --soft-orange: #FFF3E0;
            --shadow: rgba(162, 9, 39, 0.15);
            --shadow-dark: rgba(0, 0, 0, 0.2);
          }

          html {
            scroll-behavior: smooth;
          }

          body {
            font-family: 'Georgia', 'Garamond', serif;
            line-height: 1.8;
            color: var(--black);
            background-color: var(--cream);
            -webkit-text-size-adjust: 100%;
            -moz-text-size-adjust: 100%;
            text-size-adjust: 100%;
            overflow-x: hidden;
            min-height: 100vh;
          }

          /* Hero Section */
          .hero {
            background: linear-gradient(135deg, var(--primary-red) 0%, #8B0721 100%);
            color: var(--white);
            padding: 4rem 2rem;
            text-align: center;
            box-shadow: 0 8px 16px var(--shadow-dark);
            border-bottom: 4px solid var(--gold);
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
          .nav-container {
            background-color: var(--white);
            box-shadow: 0 2px 4px var(--shadow);
            position: sticky;
            top: 0;
            z-index: 100;
          }

          .nav-header {
            display: none;
            justify-content: space-between;
            align-items: center;
            padding: 0.75rem 1rem;
            background-color: var(--white);
          }

          .nav-title {
            font-weight: 700;
            color: var(--primary-red);
            font-size: 1rem;
          }

          .nav-toggle {
            background: none;
            border: 2px solid var(--primary-red);
            color: var(--primary-red);
            font-size: 1.5rem;
            cursor: pointer;
            padding: 0.25rem 0.5rem;
            border-radius: 4px;
            min-width: 44px;
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }

          .nav-toggle:hover {
            background-color: var(--primary-red);
            color: var(--white);
          }

          .main-nav {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 0.5rem;
            padding: 1rem;
            transition: max-height 0.3s ease, opacity 0.3s ease;
          }

          .main-nav a {
            color: var(--primary-red);
            text-decoration: none;
            padding: 0.5rem 1rem;
            border: 2px solid var(--primary-red);
            border-radius: 4px;
            font-weight: 600;
            transition: all 0.3s ease;
          }

          .main-nav a:hover {
            background-color: var(--primary-red);
            color: var(--off-white);
            border-color: var(--gold);
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
            color: var(--primary-red);
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
            color: var(--primary-red);
            margin-top: 1.5rem;
            margin-bottom: 0.8rem;
          }

          /* Cards */
          .card {
            background-color: var(--white);
            padding: 2rem;
            margin-bottom: 2rem;
            border-radius: 8px;
            box-shadow: 0 4px 8px var(--shadow);
            border-left: 5px solid var(--primary-red);
          }

          .card.highlight {
            background-color: var(--cream);
            border-left-color: var(--gold);
            box-shadow: 0 4px 8px var(--shadow), 0 0 0 1px var(--gold) inset;
          }

          .intro-card {
            background: linear-gradient(135deg, var(--white) 0%, var(--cream) 100%);
            border-left-color: var(--gold);
          }

          /* Typography */
          .lead {
            font-size: 1.3rem;
            font-weight: 500;
            margin-bottom: 1.5rem;
            color: var(--primary-red);
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
            background: linear-gradient(135deg, var(--cream) 0%, #FFF5E6 100%);
            border-left: 4px solid var(--gold);
            padding: 1.5rem;
            margin: 1.5rem 0;
            border-radius: 4px;
            box-shadow: 0 2px 4px var(--shadow);
          }

          .scripture-box.critical {
            border-left-color: var(--primary-red);
            background: linear-gradient(135deg, #FFF5F5 0%, #FFEBE8 100%);
            box-shadow: 0 2px 4px var(--shadow), 0 0 0 1px var(--primary-red) inset;
          }

          .verse {
            font-size: 1.15rem;
            font-style: italic;
            line-height: 1.6;
            color: var(--black);
          }

          /* Blockquotes */
          blockquote {
            background-color: var(--cream);
            border-left: 5px solid var(--bronze);
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
            color: var(--bronze);
          }

          .key-quote {
            font-size: 1.25rem;
            background: linear-gradient(135deg, var(--cream) 0%, var(--cream) 100%);
            border-left-color: var(--gold);
            border-width: 5px;
            text-align: center;
            box-shadow: 0 4px 8px var(--shadow);
          }

          .final-quote {
            font-size: 1.4rem;
            text-align: center;
            background: linear-gradient(135deg, var(--primary-red) 0%, var(--primary-red) 100%);
            color: var(--off-white);
            border: 3px solid var(--gold);
            padding: 2rem;
            box-shadow: 0 8px 16px var(--shadow-dark);
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
            display: table;
          }

          th {
            background-color: var(--primary-red);
            color: var(--off-white);
            padding: 1rem;
            text-align: left;
            font-weight: 600;
          }

          td {
            padding: 1rem;
            border-bottom: 1px solid var(--light-grey);
          }

          tbody tr:hover {
            background-color: var(--cream);
          }

          .comparison-table th {
            text-align: center;
          }

          .comparison-table td {
            text-align: center;
          }

          .comparison-table strong {
            color: var(--primary-red);
            font-size: 1.1rem;
          }

          /* Table wrapper for horizontal scrolling on small screens */
          @media (max-width: 768px) {
            table {
              display: block;
              overflow-x: auto;
              -webkit-overflow-scrolling: touch;
              white-space: nowrap;
            }

            thead,
            tbody,
            tr {
              display: table;
              width: 100%;
              table-layout: fixed;
            }
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
            color: var(--primary-red);
          }

          .greek-text em {
            font-size: 1.2rem;
            color: #555;
          }

          /* Definition Box */
          .definition-box {
            background: linear-gradient(135deg, var(--cream) 0%, var(--cream) 100%);
            border: 3px solid var(--primary-red);
            padding: 2rem;
            margin: 2rem 0;
            border-radius: 8px;
            box-shadow: 0 4px 8px var(--shadow);
          }

          .definition-box h4 {
            color: var(--primary-red);
            margin-top: 0;
          }

          .definition-box cite {
            display: block;
            margin-top: 1rem;
            font-weight: 600;
            color: var(--bronze);
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
            color: var(--primary-red);
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
            background: linear-gradient(to bottom, var(--primary-red) 0%, var(--gold) 100%);
          }

          .date {
            display: inline-block;
            background-color: var(--primary-red);
            color: var(--off-white);
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
            color: var(--primary-red);
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
            color: var(--primary-red);
            font-weight: bold;
          }

          .major-event {
            font-size: 1.3rem;
            font-weight: 600;
            color: var(--primary-red);
            text-align: center;
            margin: 1rem 0;
          }

          /* Summary Box */
          .summary-box {
            background: linear-gradient(135deg, var(--cream) 0%, var(--cream) 100%);
            border: 3px solid var(--gold);
            box-shadow: 0 4px 8px var(--shadow);
          }

          .summary-box h3 {
            color: var(--primary-red);
            margin-top: 0;
          }

          /* Conclusion Section */
          .conclusion .card {
            border-left-width: 8px;
          }

          .reflection-box {
            background-color: var(--cream);
            border: 2px solid var(--gold);
            padding: 1.5rem;
            margin: 2rem 0;
            border-radius: 8px;
          }

          .reflection-box p {
            font-weight: 600;
            color: var(--primary-red);
            margin-bottom: 1rem;
          }

          .closing {
            font-size: 1.15rem;
            font-weight: 500;
            text-align: center;
            margin-top: 2rem;
            padding: 1rem;
            background-color: var(--cream);
            border-radius: 4px;
            border: 2px solid var(--gold);
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
            color: var(--primary-red);
          }

          /* Footer */
          .site-footer {
            background: linear-gradient(135deg, var(--primary-red) 0%, var(--primary-red) 100%);
            color: var(--off-white);
            text-align: center;
            padding: 2rem;
            margin-top: 4rem;
            border-top: 4px solid var(--gold);
          }

          .site-footer p {
            margin-bottom: 0.5rem;
          }

          .copyright {
            font-size: 0.9rem;
            opacity: 0.8;
          }

          /* Audio Player Controls */
          .audio-player {
            position: fixed;
            bottom: 0;
            left: 0;
            right: 0;
            background: linear-gradient(to bottom, rgba(162, 9, 39, 0.98), rgba(162, 9, 39, 1));
            color: var(--white);
            padding: 1rem;
            box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.3);
            z-index: 1000;
            display: none;
            border-top: 3px solid var(--gold);
          }

          .audio-player.active {
            display: block;
          }

          .audio-controls {
            max-width: 1200px;
            margin: 0 auto;
            display: flex;
            flex-direction: column;
            gap: 1rem;
          }

          .audio-controls-top {
            display: flex;
            align-items: center;
            gap: 1rem;
            flex-wrap: wrap;
          }

          .audio-button {
            background: rgba(255, 255, 255, 0.2);
            border: 2px solid var(--white);
            color: var(--white);
            padding: 0.75rem 1.25rem;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            font-size: 1rem;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            min-height: 44px;
          }

          .audio-button:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: scale(1.05);
          }

          .audio-button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }

          .audio-button.primary {
            background: var(--gold);
            border-color: var(--gold);
            color: var(--black);
            font-size: 1.1rem;
            padding: 0.875rem 1.5rem;
          }

          .audio-button.primary:hover {
            background: var(--white);
            transform: scale(1.08);
          }

          .audio-status {
            flex: 1;
            font-size: 0.95rem;
            opacity: 0.9;
            min-width: 200px;
          }

          .audio-status strong {
            color: var(--gold);
            display: block;
            margin-bottom: 0.25rem;
          }

          .audio-timeline {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
            gap: 0.5rem;
            padding: 0.75rem 0;
            margin-top: 0.5rem;
          }

          .timeline-section {
            background: rgba(255, 255, 255, 0.15);
            border: 2px solid rgba(255, 255, 255, 0.3);
            color: var(--white);
            padding: 0.625rem 0.75rem;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.85rem;
            text-align: center;
            transition: all 0.2s ease;
            min-height: 44px;
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 1.3;
          }

          .timeline-section:hover {
            background: rgba(255, 255, 255, 0.25);
            border-color: var(--gold);
            transform: translateY(-2px);
          }

          .timeline-section.active {
            background: var(--gold);
            border-color: var(--gold);
            color: var(--black);
            font-weight: 600;
            box-shadow: 0 2px 8px rgba(221, 221, 221, 0.3);
          }

          .audio-toggle-btn {
            position: fixed !important;
            bottom: 2rem !important;
            right: 2rem !important;
            background: var(--primary-red) !important;
            color: var(--white) !important;
            border: 3px solid var(--gold) !important;
            width: 60px !important;
            height: 60px !important;
            border-radius: 50% !important;
            cursor: pointer !important;
            font-size: 1.5rem !important;
            box-shadow: 0 4px 15px rgba(162, 9, 39, 0.5) !important;
            z-index: 9999 !important;
            transition: all 0.3s ease !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            opacity: 1 !important;
            visibility: visible !important;
            pointer-events: auto !important;
          }

          .audio-toggle-btn:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 20px rgba(162, 9, 39, 0.7);
          }

          .audio-toggle-btn:active {
            transform: scale(0.95);
          }

          /* Responsive Design - Mobile First Approach */
          
          /* Small phones (up to 480px) */
          @media (max-width: 480px) {
            .hero {
              padding: 2rem 1rem;
            }

            .hero-content h1 {
              font-size: 1.5rem;
              line-height: 1.2;
            }

            .subtitle {
              font-size: 0.95rem;
              line-height: 1.4;
            }

            /* Mobile Navigation - Hamburger Menu */
            .nav-header {
              display: flex;
            }

            .main-nav {
              display: none;
              flex-direction: column;
              padding: 0;
              gap: 0;
              width: 100%;
            }

            .main-nav.open {
              display: flex;
            }

            .main-nav a {
              padding: 0.875rem 1rem;
              font-size: 1rem;
              width: 100%;
              border: none;
              border-bottom: 1px solid var(--light-grey);
              border-radius: 0;
              text-align: left;
            }

            .main-nav a:last-child {
              border-bottom: none;
            }

            .main-nav a:hover {
              background-color: rgba(162, 9, 39, 0.05);
              border-color: var(--light-grey);
            }

            .content {
              padding: 1rem 0.75rem;
            }

            .section {
              margin-bottom: 2rem;
            }

            .section h2 {
              font-size: 1.5rem;
              margin-bottom: 1rem;
            }

            .section h3 {
              font-size: 1.3rem;
              margin-top: 1rem;
            }

            .section h4 {
              font-size: 1.1rem;
            }

            .card {
              padding: 1rem;
              margin-bottom: 1rem;
              border-left-width: 3px;
            }

            .lead {
              font-size: 1.1rem;
            }

            p {
              font-size: 0.95rem;
              line-height: 1.6;
            }

            ul, ol {
              margin-left: 1.25rem;
            }

            blockquote {
              padding: 1rem;
              font-size: 0.95rem;
            }

            .scripture-box,
            .insight,
            .reaction,
            .rebuttal,
            .analysis {
              padding: 0.75rem 1rem;
              margin: 1rem 0;
            }

            .verse {
              font-size: 1rem;
            }

            table {
              font-size: 0.8rem;
              display: block;
              overflow-x: auto;
              -webkit-overflow-scrolling: touch;
            }

            th, td {
              padding: 0.4rem;
              font-size: 0.8rem;
            }

            .philosophy-box {
              grid-template-columns: 1fr;
              gap: 1rem;
            }

            .concept {
              padding: 1rem;
            }

            .timeline-item {
              padding-left: 1rem;
            }

            .date {
              font-size: 0.85rem;
              padding: 0.2rem 0.5rem;
            }

            .greek-text {
              padding: 1rem;
            }

            .greek-text strong {
              font-size: 1.2rem;
            }

            .greek-text em {
              font-size: 1rem;
            }

            .definition-box,
            .summary-box {
              padding: 1rem;
            }

            .site-footer {
              padding: 1.5rem 1rem;
              font-size: 0.9rem;
            }

            /* Audio Player - Mobile Optimizations */
            .audio-player {
              width: 95%;
              bottom: 1rem;
              left: 2.5%;
              padding: 1rem;
              max-height: 80vh;
              overflow-y: auto;
            }

            .audio-controls-top {
              flex-direction: column;
              gap: 0.5rem;
            }

            .audio-button {
              width: 100%;
              justify-content: center;
              padding: 0.75rem;
              font-size: 0.95rem;
            }

            .audio-button.primary {
              font-size: 1.05rem;
              padding: 0.875rem;
            }

            .audio-status {
              width: 100%;
              text-align: center;
              font-size: 0.9rem;
            }

            .audio-timeline {
              grid-template-columns: repeat(2, 1fr);
              gap: 0.4rem;
            }

            .timeline-section {
              font-size: 0.8rem;
              padding: 0.5rem 0.4rem;
              min-height: 40px;
            }

            .audio-toggle-btn {
              width: 56px !important;
              height: 56px !important;
              bottom: 1.5rem !important;
              right: 1.5rem !important;
              font-size: 1.4rem !important;
              z-index: 9999 !important;
              display: flex !important;
            }
          }

          /* Tablets and larger phones (481px to 768px) */
          @media (min-width: 481px) and (max-width: 768px) {
            .hero {
              padding: 3rem 1.5rem;
            }

            .hero-content h1 {
              font-size: 2rem;
            }

            .subtitle {
              font-size: 1.1rem;
            }

            /* Mobile Navigation - Hamburger Menu */
            .nav-header {
              display: flex;
            }

            .main-nav {
              display: none;
              flex-direction: column;
              padding: 0;
              gap: 0;
              width: 100%;
            }

            .main-nav.open {
              display: flex;
            }

            .main-nav a {
              padding: 1rem 1.25rem;
              font-size: 1.05rem;
              width: 100%;
              border: none;
              border-bottom: 1px solid var(--light-grey);
              border-radius: 0;
              text-align: left;
            }

            .main-nav a:last-child {
              border-bottom: none;
            }

            .main-nav a:hover {
              background-color: rgba(162, 9, 39, 0.05);
              border-color: var(--light-grey);
            }

            .content {
              padding: 1.5rem 1rem;
            }

            .section h2 {
              font-size: 2rem;
            }

            .section h3 {
              font-size: 1.5rem;
            }

            .card {
              padding: 1.5rem;
            }

            .philosophy-box {
              grid-template-columns: 1fr;
              gap: 1.5rem;
            }

            table {
              font-size: 0.9rem;
              display: block;
              overflow-x: auto;
              -webkit-overflow-scrolling: touch;
            }

            th, td {
              padding: 0.6rem;
            }

            /* Audio Player - Tablet Optimizations */
            .audio-player {
              width: 90%;
              left: 5%;
              padding: 1.25rem;
            }

            .audio-timeline {
              grid-template-columns: repeat(3, 1fr);
              gap: 0.5rem;
            }

            .timeline-section {
              font-size: 0.85rem;
              padding: 0.6rem 0.7rem;
            }
          }

          /* Tablets landscape and small desktops (769px to 1024px) */
          @media (min-width: 769px) and (max-width: 1024px) {
            .content {
              max-width: 900px;
              padding: 2rem 1.5rem;
            }

            .hero-content h1 {
              font-size: 2.5rem;
            }

            .subtitle {
              font-size: 1.2rem;
            }

            .main-nav a {
              padding: 0.6rem 0.9rem;
              font-size: 0.95rem;
            }

            table {
              font-size: 0.95rem;
            }
          }

          /* Large desktops (1025px and above) */
          @media (min-width: 1025px) {
            .content {
              max-width: 1200px;
            }

            .hero-content h1 {
              font-size: 3rem;
            }

            /* Enhance reading experience on large screens */
            .card {
              padding: 2.5rem;
            }

            .section {
              margin-bottom: 5rem;
            }
          }

          /* Ultra-wide displays (1440px and above) */
          @media (min-width: 1440px) {
            .content {
              max-width: 1400px;
            }

            .hero-content h1 {
              font-size: 3.5rem;
            }

            .subtitle {
              font-size: 1.4rem;
            }

            .section h2 {
              font-size: 2.8rem;
            }
          }

          /* Touch device optimizations */
          @media (hover: none) and (pointer: coarse) {
            .main-nav a {
              min-height: 44px;
              display: flex;
              align-items: center;
              justify-content: center;
            }

            /* Increase tap targets for touch devices */
            a, button {
              min-height: 44px;
              min-width: 44px;
            }

            /* Remove hover effects on touch devices */
            .main-nav a:hover {
              background-color: transparent;
              color: var(--primary-red);
            }

            /* Better spacing for touch interaction */
            .main-nav {
              gap: 0.75rem;
            }
          }

          /* High DPI displays (Retina) */
          @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {
            body {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
            }
          }

          /* Landscape orientation adjustments */
          @media (max-width: 768px) and (orientation: landscape) {
            .hero {
              padding: 2rem 1.5rem;
            }

            .hero-content h1 {
              font-size: 1.8rem;
            }

            .main-nav {
              padding: 0.5rem;
            }

            .section {
              margin-bottom: 2rem;
            }
          }

          /* Audio Player Mobile Styles */
          @media (max-width: 768px) {
            .audio-player {
              padding: 0.75rem;
            }

            .audio-controls-top {
              flex-direction: column;
              align-items: stretch;
            }

            .audio-button {
              width: 100%;
              justify-content: center;
            }

            .audio-status {
              text-align: center;
            }

            .audio-toggle-btn {
              bottom: 1rem !important;
              right: 1rem !important;
              width: 56px !important;
              height: 56px !important;
              font-size: 1.3rem !important;
              display: flex !important;
              z-index: 9999 !important;
            }

            .timeline-section {
              font-size: 0.85rem;
              padding: 0.4rem 0.8rem;
            }
          }

          /* Print Styles */
          @media print {
            .audio-player,
            .audio-toggle-btn {
              display: none !important;
            }
            .main-nav {
              display: none;
            }

            .hero {
              background: var(--primary-red);
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
        <script dangerouslySetInnerHTML={{
          __html: `
            // Toggle mobile navigation menu
            function toggleNav() {
              const nav = document.querySelector('.main-nav');
              if (nav) {
                nav.classList.toggle('open');
              }
            }
            
            // Close menu when a link is clicked
            document.addEventListener('DOMContentLoaded', function() {
              const navLinks = document.querySelectorAll('.main-nav a');
              navLinks.forEach(link => {
                link.addEventListener('click', function() {
                  const nav = document.querySelector('.main-nav');
                  if (nav && nav.classList.contains('open')) {
                    nav.classList.remove('open');
                  }
                });
              });

              // Initialize Text-to-Speech Audio Player
              initAudioPlayer();
            });

            // Text-to-Speech Audio Player
            function initAudioPlayer() {
              if (!('speechSynthesis' in window)) {
                console.log('Text-to-Speech not supported');
                return;
              }

              const sections = [
                { id: 'introduction', name: 'Introduction' },
                { id: 'old-testament', name: 'Old Testament' },
                { id: 'john-6', name: 'John 6' },
                { id: 'institution', name: 'Institution' },
                { id: 'church-fathers', name: 'Church Fathers' },
                { id: 'reservation', name: 'Reservation' },
                { id: 'transubstantiation', name: 'Transubstantiation' },
                { id: 'timeline', name: 'Timeline' },
                { id: 'reformation', name: 'Reformation' }
              ];

              let currentSection = 0;
              let isPaused = false;
              let currentUtterance = null;

              // Create audio player UI
              const audioPlayer = document.createElement('div');
              audioPlayer.className = 'audio-player';
              audioPlayer.innerHTML = \`
                <div class="audio-controls">
                  <div class="audio-controls-top">
                    <button class="audio-button primary" id="playPauseBtn">
                      <span id="playIcon">▶</span> <span id="playText">Play</span>
                    </button>
                    <button class="audio-button" id="stopBtn">⏹ Stop</button>
                    <button class="audio-button" id="prevBtn">⏮ Previous</button>
                    <button class="audio-button" id="nextBtn">⏭ Next</button>
                    <div class="audio-status">
                      <strong>Reading:</strong>
                      <span id="currentSection">Not started</span>
                    </div>
                  </div>
                  <div class="audio-timeline" id="audioTimeline"></div>
                </div>
              \`;
              document.body.appendChild(audioPlayer);

              // Create toggle button
              const toggleBtn = document.createElement('button');
              toggleBtn.className = 'audio-toggle-btn';
              toggleBtn.innerHTML = '🔊';
              toggleBtn.title = 'Toggle Audio Player';
              toggleBtn.onclick = () => {
                audioPlayer.classList.toggle('active');
              };
              document.body.appendChild(toggleBtn);

              // Create timeline buttons
              const timeline = document.getElementById('audioTimeline');
              sections.forEach((section, index) => {
                const btn = document.createElement('button');
                btn.className = 'timeline-section';
                btn.textContent = section.name;
                btn.onclick = () => jumpToSection(index);
                timeline.appendChild(btn);
              });

              // Get DOM elements
              const playPauseBtn = document.getElementById('playPauseBtn');
              const stopBtn = document.getElementById('stopBtn');
              const prevBtn = document.getElementById('prevBtn');
              const nextBtn = document.getElementById('nextBtn');
              const playIcon = document.getElementById('playIcon');
              const playText = document.getElementById('playText');
              const currentSectionLabel = document.getElementById('currentSection');

              // Get or select the best male voice
              function getMaleVoice() {
                const voices = speechSynthesis.getVoices();
                // Prefer natural-sounding US English male voices
                const preferredVoices = [
                  'Google US English Male',
                  'Microsoft David - English (United States)',
                  'Alex',
                  'Google US English',
                  'Microsoft Mark - English (United States)'
                ];

                for (const preferred of preferredVoices) {
                  const voice = voices.find(v => v.name.includes(preferred));
                  if (voice) return voice;
                }

                // Fallback: any male or default English voice
                return voices.find(v => 
                  v.lang.startsWith('en') && 
                  (v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('david') || v.name.toLowerCase().includes('mark'))
                ) || voices.find(v => v.lang.startsWith('en')) || voices[0];
              }

              function getTextContent(sectionId) {
                const section = document.getElementById(sectionId);
                if (!section) return '';
                
                // Clone the section to avoid modifying the original
                const clone = section.cloneNode(true);
                
                // Remove navigation, scripts, and style elements
                const unwanted = clone.querySelectorAll('nav, script, style, .main-nav');
                unwanted.forEach(el => el.remove());
                
                // Get text content
                return clone.textContent
                  .replace(/\\s+/g, ' ')
                  .replace(/—/g, ' ')
                  .trim();
              }

              function updateUI() {
                const timelineBtns = timeline.querySelectorAll('.timeline-section');
                timelineBtns.forEach((btn, index) => {
                  btn.classList.toggle('active', index === currentSection);
                });

                currentSectionLabel.textContent = sections[currentSection]?.name || 'Not started';
              }

              function speak(text) {
                if (!text) return;

                // Cancel any ongoing speech
                speechSynthesis.cancel();

                const utterance = new SpeechSynthesisUtterance(text);
                const voice = getMaleVoice();
                
                if (voice) {
                  utterance.voice = voice;
                }
                
                utterance.lang = 'en-US';
                utterance.rate = 1.0;
                utterance.pitch = 1.0;
                utterance.volume = 1.0;

                utterance.onend = () => {
                  // Auto-advance to next section
                  if (currentSection < sections.length - 1) {
                    currentSection++;
                    updateUI();
                    const nextText = getTextContent(sections[currentSection].id);
                    speak(nextText);
                  } else {
                    // Finished all sections
                    stop();
                  }
                };

                utterance.onerror = (event) => {
                  console.error('Speech error:', event);
                  stop();
                };

                currentUtterance = utterance;
                speechSynthesis.speak(utterance);
                isPaused = false;
                updatePlayPauseButton();
              }

              function updatePlayPauseButton() {
                if (speechSynthesis.speaking && !speechSynthesis.paused) {
                  playIcon.textContent = '⏸';
                  playText.textContent = 'Pause';
                } else {
                  playIcon.textContent = '▶';
                  playText.textContent = 'Play';
                }
              }

              function play() {
                if (speechSynthesis.paused) {
                  speechSynthesis.resume();
                  isPaused = false;
                } else if (!speechSynthesis.speaking) {
                  const text = getTextContent(sections[currentSection].id);
                  speak(text);
                }
                updatePlayPauseButton();
                updateUI();
              }

              function pause() {
                if (speechSynthesis.speaking) {
                  speechSynthesis.pause();
                  isPaused = true;
                  updatePlayPauseButton();
                }
              }

              function stop() {
                speechSynthesis.cancel();
                isPaused = false;
                currentUtterance = null;
                updatePlayPauseButton();
              }

              function next() {
                if (currentSection < sections.length - 1) {
                  stop();
                  currentSection++;
                  updateUI();
                  play();
                }
              }

              function prev() {
                if (currentSection > 0) {
                  stop();
                  currentSection--;
                  updateUI();
                  play();
                }
              }

              function jumpToSection(index) {
                if (index >= 0 && index < sections.length) {
                  stop();
                  currentSection = index;
                  updateUI();
                  play();
                }
              }

              // Event listeners
              playPauseBtn.onclick = () => {
                if (speechSynthesis.speaking && !speechSynthesis.paused) {
                  pause();
                } else {
                  play();
                }
              };

              stopBtn.onclick = stop;
              nextBtn.onclick = next;
              prevBtn.onclick = prev;

              // Load voices (Chrome requires this)
              if (speechSynthesis.onvoiceschanged !== undefined) {
                speechSynthesis.onvoiceschanged = () => {
                  getMaleVoice();
                };
              }

              // Initialize UI
              updateUI();
            }
          `
        }} />
      </body>
    </html>
  )
})
