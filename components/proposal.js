const {
    Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
    HeadingLevel, AlignmentType, BorderStyle, WidthType, ShadingType,
    LevelFormat, PageBreak, UnderlineType
  } = require('docx');
  const fs = require('fs');
  
  const BRAND_GOLD = "7B5C1A";
  const BRAND_DARK = "3D1F00";
  const LIGHT_GOLD_BG = "FDF6E3";
  const LIGHT_GRAY_BG = "F5F5F5";
  const ACCENT_GREEN = "1A6B3A";
  const ACCENT_RED = "8B1A1A";
  const WHITE = "FFFFFF";
  
  const border = { style: BorderStyle.SINGLE, size: 1, color: "DDDDDD" };
  const borders = { top: border, bottom: border, left: border, right: border };
  const noBorder = { style: BorderStyle.NONE, size: 0, color: "FFFFFF" };
  const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };
  
  function h1(text) {
    return new Paragraph({
      heading: HeadingLevel.HEADING_1,
      spacing: { before: 360, after: 120 },
      children: [new TextRun({ text, bold: true, size: 36, color: BRAND_DARK, font: "Arial" })]
    });
  }
  
  function h2(text) {
    return new Paragraph({
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 280, after: 100 },
      children: [new TextRun({ text, bold: true, size: 28, color: BRAND_GOLD, font: "Arial" })]
    });
  }
  
  function h3(text) {
    return new Paragraph({
      spacing: { before: 200, after: 80 },
      children: [new TextRun({ text, bold: true, size: 24, color: BRAND_DARK, font: "Arial" })]
    });
  }
  
  function body(text, opts = {}) {
    return new Paragraph({
      spacing: { before: 60, after: 60 },
      children: [new TextRun({ text, size: 22, font: "Arial", color: "333333", ...opts })]
    });
  }
  
  function bullet(text, bold = false) {
    return new Paragraph({
      numbering: { reference: "bullets", level: 0 },
      spacing: { before: 40, after: 40 },
      children: [new TextRun({ text, size: 22, font: "Arial", color: "333333", bold })]
    });
  }
  
  function subbullet(text) {
    return new Paragraph({
      numbering: { reference: "subbullets", level: 1 },
      spacing: { before: 30, after: 30 },
      children: [new TextRun({ text, size: 20, font: "Arial", color: "555555" })]
    });
  }
  
  function spacer(lines = 1) {
    return new Paragraph({ spacing: { before: 0, after: lines * 120 }, children: [] });
  }
  
  function divider() {
    return new Paragraph({
      spacing: { before: 160, after: 160 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: BRAND_GOLD, space: 1 } },
      children: []
    });
  }
  
  function labeledRow(label, value, labelBg = LIGHT_GOLD_BG, valueBg = WHITE) {
    return new TableRow({
      children: [
        new TableCell({
          borders,
          width: { size: 3000, type: WidthType.DXA },
          shading: { fill: labelBg, type: ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun({ text: label, bold: true, size: 20, font: "Arial", color: BRAND_DARK })] })]
        }),
        new TableCell({
          borders,
          width: { size: 6360, type: WidthType.DXA },
          shading: { fill: valueBg, type: ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun({ text: value, size: 20, font: "Arial", color: "333333" })] })]
        })
      ]
    });
  }
  
  function twoColHeaderRow(col1, col2) {
    return new TableRow({
      tableHeader: true,
      children: [col1, col2].map(text => new TableCell({
        borders,
        width: { size: 4680, type: WidthType.DXA },
        shading: { fill: BRAND_DARK, type: ShadingType.CLEAR },
        margins: { top: 100, bottom: 100, left: 140, right: 140 },
        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text, bold: true, size: 22, font: "Arial", color: WHITE })] })]
      }))
    });
  }
  
  function twoColRow(col1, col2, rowBg = WHITE) {
    return new TableRow({
      children: [col1, col2].map(text => new TableCell({
        borders,
        width: { size: 4680, type: WidthType.DXA },
        shading: { fill: rowBg, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 140, right: 140 },
        children: [new Paragraph({ children: [new TextRun({ text, size: 20, font: "Arial", color: "333333" })] })]
      }))
    });
  }
  
  function threeColHeaderRow(c1, c2, c3) {
    return new TableRow({
      tableHeader: true,
      children: [c1, c2, c3].map(text => new TableCell({
        borders,
        width: { size: 3120, type: WidthType.DXA },
        shading: { fill: BRAND_GOLD, type: ShadingType.CLEAR },
        margins: { top: 100, bottom: 100, left: 100, right: 100 },
        children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text, bold: true, size: 20, font: "Arial", color: WHITE })] })]
      }))
    });
  }
  
  function threeColRow(c1, c2, c3, bg = WHITE) {
    return new TableRow({
      children: [c1, c2, c3].map(text => new TableCell({
        borders,
        width: { size: 3120, type: WidthType.DXA },
        shading: { fill: bg, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 100, right: 100 },
        children: [new Paragraph({ children: [new TextRun({ text, size: 20, font: "Arial", color: "333333" })] })]
      }))
    });
  }
  
  function infoBox(title, lines, bgColor = LIGHT_GOLD_BG) {
    const rows = [
      new TableRow({
        children: [new TableCell({
          borders,
          width: { size: 9360, type: WidthType.DXA },
          shading: { fill: BRAND_GOLD, type: ShadingType.CLEAR },
          margins: { top: 100, bottom: 100, left: 140, right: 140 },
          children: [new Paragraph({ children: [new TextRun({ text: title, bold: true, size: 22, font: "Arial", color: WHITE })] })]
        })]
      }),
      ...lines.map(line => new TableRow({
        children: [new TableCell({
          borders,
          width: { size: 9360, type: WidthType.DXA },
          shading: { fill: bgColor, type: ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 140, right: 140 },
          children: [new Paragraph({ children: [new TextRun({ text: line, size: 20, font: "Arial", color: "333333" })] })]
        })]
      }))
    ];
    return new Table({ width: { size: 9360, type: WidthType.DXA }, columnWidths: [9360], rows });
  }
  
  const doc = new Document({
    numbering: {
      config: [
        {
          reference: "bullets",
          levels: [{
            level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } }
          }]
        },
        {
          reference: "subbullets",
          levels: [
            { level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
            { level: 1, format: LevelFormat.BULLET, text: "\u25E6", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1080, hanging: 360 } } } }
          ]
        },
        {
          reference: "numbered",
          levels: [{
            level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } }
          }]
        }
      ]
    },
    styles: {
      default: { document: { run: { font: "Arial", size: 22 } } },
      paragraphStyles: [
        { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 36, bold: true, font: "Arial", color: BRAND_DARK }, paragraph: { spacing: { before: 360, after: 120 }, outlineLevel: 0 } },
        { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true, run: { size: 28, bold: true, font: "Arial", color: BRAND_GOLD }, paragraph: { spacing: { before: 280, after: 100 }, outlineLevel: 1 } },
      ]
    },
    sections: [{
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
        }
      },
      children: [
  
        // ============ COVER PAGE ============
        spacer(3),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 80 },
          children: [new TextRun({ text: "FURNIXR", bold: true, size: 72, font: "Arial", color: BRAND_GOLD })]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 0, after: 80 },
          children: [new TextRun({ text: "Website Redesign & Conversion Optimization", bold: true, size: 40, font: "Arial", color: BRAND_DARK })]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 40, after: 40 },
          children: [new TextRun({ text: "Full Strategy Proposal", size: 28, font: "Arial", color: "666666" })]
        }),
        spacer(1),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: BRAND_GOLD } },
          spacing: { before: 0, after: 240 },
          children: []
        }),
        spacer(1),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 60, after: 60 },
          children: [new TextRun({ text: "Prepared for: Furnixr (furnixr.com)", size: 24, font: "Arial", color: "444444" })]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 60, after: 60 },
          children: [new TextRun({ text: "Date: May 2026", size: 24, font: "Arial", color: "444444" })]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 60, after: 60 },
          children: [new TextRun({ text: "Document Type: Shopify Conversion-Focused Redesign Proposal", size: 24, font: "Arial", color: "444444" })]
        }),
        spacer(2),
        new Paragraph({ children: [new PageBreak()] }),
  
        // ============ SECTION 1: EXECUTIVE SUMMARY ============
        h1("1. Executive Summary"),
        divider(),
        body("Furnixr is a premium metallic furniture brand with a distinctive visual identity — gold tones, sculptural pieces, and a luxury aesthetic. However, the current Shopify store, while visually clean, is not optimized to convert visitors into buyers."),
        spacer(1),
        body("This document outlines a complete conversion-focused redesign strategy covering:"),
        bullet("Homepage and navigation overhaul"),
        bullet("Product page and collection page upgrades"),
        bullet("Trust & credibility elements"),
        bullet("Checkout and cart optimization"),
        bullet("Recommended Shopify apps and integrations"),
        bullet("Post-launch growth tools"),
        spacer(1),
        body("The goal is to transform Furnixr from a digital catalogue into a high-converting luxury e-commerce experience."),
  
        spacer(1),
        new Paragraph({ children: [new PageBreak()] }),
  
        // ============ SECTION 2: CURRENT SITE AUDIT ============
        h1("2. Current Site Audit — What's Working & What's Not"),
        divider(),
        h2("2.1  What the Current Site Has Going For It"),
        bullet("Clean white background that lets products breathe"),
        bullet("Consistent gold/brown color palette matching brand identity"),
        bullet("Well-organized product categories (ConsoleX, CotX, SittingX, etc.)"),
        bullet("Clear navigation with Catalog dropdown"),
        bullet("WhatsApp + Instagram floating buttons — smart for the South Asian market"),
        spacer(1),
        h2("2.2  Critical Conversion Problems Identified"),
        spacer(1),
  
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [3500, 5860],
          rows: [
            new TableRow({
              tableHeader: true,
              children: [
                new TableCell({ borders, width: { size: 3500, type: WidthType.DXA }, shading: { fill: BRAND_DARK, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Problem Area", bold: true, size: 22, font: "Arial", color: WHITE })] })] }),
                new TableCell({ borders, width: { size: 5860, type: WidthType.DXA }, shading: { fill: BRAND_DARK, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Specific Issue", bold: true, size: 22, font: "Arial", color: WHITE })] })] })
              ]
            }),
            labeledRow("Hero Section", "Generic headline 'Forge Your Style' with no value proposition, no urgency, and no social proof above the fold", LIGHT_GOLD_BG),
            labeledRow("No Trust Signals", "No customer reviews, no testimonials, no ratings anywhere on the homepage or collection pages", "F9F9F9"),
            labeledRow("Product Watermarks", "Visible watermarks on product images undermine premium perception and look unfinished", LIGHT_GOLD_BG),
            labeledRow("No Pricing on Homepage", "Visitors cannot gauge affordability from the homepage — they must click deep into the site", "F9F9F9"),
            labeledRow("Weak CTAs", "'View all' and 'Shop Now' are generic. No urgency, no offer, no reason to click now", LIGHT_GOLD_BG),
            labeledRow("No Announcement Bar", "Missing opportunity to highlight offers, free shipping threshold, or limited availability", "F9F9F9"),
            labeledRow("No Sticky Header", "Navigation disappears on scroll — users have to scroll back up to navigate", LIGHT_GOLD_BG),
            labeledRow("Contact Page Only", "No live chat, no quick inquiry flow, no estimated delivery info on product pages", "F9F9F9"),
            labeledRow("No Upsell/Cross-sell", "Collection pages and product pages have no recommended products or room bundles", LIGHT_GOLD_BG),
            labeledRow("Footer is Bare", "Only a Search link in the footer. No policies, social links, payment badges, or contact info", "F9F9F9"),
            labeledRow("No Mobile Optimization Cues", "Layout appears desktop-first; mobile UX likely suffers on touch-based browsing", LIGHT_GOLD_BG),
          ]
        }),
  
        spacer(1),
        new Paragraph({ children: [new PageBreak()] }),
  
        // ============ SECTION 3: REDESIGN STRATEGY ============
        h1("3. Conversion-Focused Redesign Strategy"),
        divider(),
  
        h2("3.1  Homepage Redesign"),
        h3("Announcement Bar (Top of Page)"),
        bullet("Add a sticky gold announcement bar above the header"),
        bullet("Example messages: \"Free Shipping on Orders Above Rs. 25,000 | Limited Stock Available | WhatsApp Us for Custom Orders\""),
        bullet("Use urgency copy on sale periods: \"Eid Special — 15% Off Sitewide | Ends Sunday\""),
        spacer(1),
        h3("Hero Section Overhaul"),
        bullet("Replace static image with a full-width video loop of products in luxury interior settings"),
        bullet("Add a compelling headline focused on transformation, not product: e.g., \"Turn Any Room Into a Showpiece\""),
        bullet("Add a subheadline with trust anchors: \"Premium Metal Furniture | Handcrafted in Pakistan | Ships Pan-India\""),
        bullet("Two CTAs: Primary = 'Shop Best Sellers' | Secondary = 'View Lookbook'"),
        bullet("Add below-fold trust strip: Icons for 'Free Delivery', 'Easy Returns', 'Genuine Metal', 'WhatsApp Support'"),
        spacer(1),
        h3("Social Proof Section — Above the Collections"),
        bullet("Add a star rating summary: \"4.8/5 from 200+ Happy Customers\""),
        bullet("Embed 3–4 photo reviews from real customers showing pieces in their homes"),
        bullet("Add a press/feature bar if applicable: \"As seen in...\" or brand partnerships"),
        spacer(1),
        h3("Collections Section — Enhanced"),
        bullet("Keep the 3-column grid but add category descriptions under each collection name"),
        bullet("Show price range: \"Starting from Rs. 8,500\""),
        bullet("Add hover overlay with 'Shop Now' button on each collection card"),
        bullet("Feature a 'Most Popular' badge on top-selling collections"),
        spacer(1),
        h3("New Homepage Sections to Add"),
        bullet("'Why Furnixr?' section — 4 icon blocks (Metal Quality, Custom Sizing, Pan-India Delivery, After-Sales Support)"),
        bullet("'Complete the Look' room inspiration section — curated product bundles (Living Room Set, Bedroom Set, etc.)"),
        bullet("Instagram Feed / UGC Gallery — show real rooms with Furnixr pieces"),
        bullet("Newsletter signup with an incentive: \"Get 10% off your first order\""),
        spacer(1),
  
        h2("3.2  Navigation & Header Redesign"),
        bullet("Make header sticky (stays visible while scrolling)"),
        bullet("Add a 'Sale' or 'New Arrivals' tab in the main navigation with a red/gold badge"),
        bullet("Add a currency/location switcher if planning international expansion"),
        bullet("Add a Wishlist icon next to Cart"),
        bullet("Redesign Catalog dropdown with visual thumbnails for each collection (mega menu)"),
        bullet("Add a search bar that is always visible, with autocomplete product suggestions"),
        spacer(1),
  
        h2("3.3  Collection Page Redesign"),
        bullet("Add collection banner image at the top with a brief description (what makes this collection special)"),
        bullet("Add filter options: Material, Price Range, Finish (Gold/Silver/Bronze), Room Type"),
        bullet("Add sort by: New Arrivals, Price Low-High, Best Selling, Most Reviewed"),
        bullet("Show product cards with: Name, Price, Star Rating, 'Add to Cart' button visible on hover"),
        bullet("Add 'Sold Out' badges and 'Low Stock — Only 3 Left' urgency labels"),
        bullet("Enable quick-view popup so users can see product details without leaving the collection"),
        spacer(1),
  
        h2("3.4  Product Page Redesign"),
        body("This is the most critical page for conversion. Every element must build confidence and reduce friction."),
        spacer(1),
        h3("Images & Media"),
        bullet("Remove watermarks from all product images"),
        bullet("Add minimum 4–6 images per product: front, side, detail shots, lifestyle/in-room shots"),
        bullet("Add 360-degree view or short video clip for hero products"),
        bullet("Add image zoom on hover"),
        spacer(1),
        h3("Product Information"),
        bullet("Clear, prominent price with EMI option note: \"Or pay in 3 installments\""),
        bullet("Size selector if applicable (dimensions displayed visually, not just text)"),
        bullet("Finish/color selector with visual swatches"),
        bullet("Short bullet-point description: Material, Dimensions, Weight Capacity, Warranty"),
        bullet("'Add to Cart' button in a contrasting color (deep brown or gold), full width on mobile"),
        bullet("'Add to Wishlist' secondary button"),
        bullet("WhatsApp CTA: 'Ask About This Product on WhatsApp'"),
        spacer(1),
        h3("Trust Builders on Product Page"),
        bullet("Delivery estimate: 'Ships within 5–7 business days'"),
        bullet("Return policy: 'Easy 7-day returns'"),
        bullet("Secure payment icons (Visa, Mastercard, UPI, COD badge)"),
        bullet("'In Stock' or 'Only X Left' stock indicator"),
        spacer(1),
        h3("Product Page Upsells"),
        bullet("'Frequently Bought Together' section — pair console with a mirror, chair with end table"),
        bullet("'Complete the Set' — show other pieces from the same collection"),
        bullet("'You May Also Like' — AI-powered recommendation row"),
        spacer(1),
        h3("Reviews Section"),
        bullet("Star rating summary at top of reviews section"),
        bullet("Photo review capability — let customers upload images of products in their homes"),
        bullet("Verified purchase badge"),
        bullet("Sort reviews by: Most Recent, Most Helpful, Highest Rated"),
        spacer(1),
  
        h2("3.5  Cart & Checkout Optimization"),
        bullet("Sticky 'Add to Cart' bar that appears when the main CTA scrolls out of view"),
        bullet("Slide-out cart drawer (instead of redirect to cart page) to reduce friction"),
        bullet("Cart upsell: 'You're Rs. 5,000 away from free shipping!'"),
        bullet("Show estimated delivery date in cart"),
        bullet("Offer order insurance or warranty add-on in cart"),
        bullet("One-page checkout with progress indicator"),
        bullet("Enable Shop Pay, Google Pay, and UPI checkout for speed"),
        bullet("Post-purchase upsell page: 'Add matching piece at 10% off — one time only'"),
        spacer(1),
  
        h2("3.6  Footer Redesign"),
        bullet("Company info: Brief brand statement, address, GST number"),
        bullet("Quick Links: Home, Catalog, Contact, About, Shipping Policy, Return Policy"),
        bullet("Customer Service: WhatsApp number, email, business hours"),
        bullet("Social Media icons: Instagram, Facebook, Pinterest, YouTube"),
        bullet("Payment badges: Visa, Mastercard, UPI, COD, Razorpay"),
        bullet("Trust badges: SSL Secure, Genuine Products, ISO/quality certifications if applicable"),
        bullet("Newsletter signup field"),
  
        spacer(1),
        new Paragraph({ children: [new PageBreak()] }),
  
        // ============ SECTION 4: SHOPIFY APPS ============
        h1("4. Recommended Shopify Apps & Integrations"),
        divider(),
        body("These apps directly impact conversion rate, average order value, and customer retention. Organized by priority."),
        spacer(1),
  
        h2("4.1  Reviews & Social Proof"),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2800, 3000, 3560],
          rows: [
            threeColHeaderRow("App", "Purpose", "Why It Matters for Furnixr"),
            threeColRow("Judge.me", "Photo reviews, star ratings", "Builds trust; luxury buyers read reviews carefully", LIGHT_GOLD_BG),
            threeColRow("Loox", "Visual photo reviews & UGC", "Furniture is visual — customer photos in real rooms convert", WHITE),
            threeColRow("Yotpo", "Reviews + loyalty + referrals", "All-in-one if budget allows; excellent for premium brands", LIGHT_GOLD_BG),
            threeColRow("Ali Reviews", "Budget alternative to Loox", "Import & display reviews with photos affordably", WHITE),
          ]
        }),
        spacer(1),
  
        h2("4.2  Upsells & Cross-sells"),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2800, 3000, 3560],
          rows: [
            threeColHeaderRow("App", "Purpose", "Use Case for Furnixr"),
            threeColRow("ReConvert", "Post-purchase upsell pages", "'Add matching console for 10% off' after checkout", LIGHT_GOLD_BG),
            threeColRow("Frequently Bought Together", "Product page bundles", "Pair chair + end table + lamp in one click", WHITE),
            threeColRow("Candy Rack", "In-cart upsell offers", "Add cushion, protective cover, or warranty to cart", LIGHT_GOLD_BG),
            threeColRow("Zipify OneClickUpsell", "One-click post-purchase upsell", "Premium upsell flow for higher AOV", WHITE),
          ]
        }),
        spacer(1),
  
        h2("4.3  Abandoned Cart & Email/SMS Marketing"),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2800, 3000, 3560],
          rows: [
            threeColHeaderRow("App", "Purpose", "Use Case for Furnixr"),
            threeColRow("Klaviyo", "Email + SMS automation", "Abandoned cart, back-in-stock, post-purchase flows", LIGHT_GOLD_BG),
            threeColRow("SMSBump (by Yotpo)", "SMS marketing", "High open rates; WhatsApp-comfortable audience", WHITE),
            threeColRow("Omnisend", "Budget Klaviyo alternative", "Full automation including WhatsApp notifications", LIGHT_GOLD_BG),
            threeColRow("PushOwl", "Browser push notifications", "Re-engage visitors who didn't subscribe to email", WHITE),
          ]
        }),
        spacer(1),
  
        h2("4.4  Wishlist & Customer Retention"),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2800, 3000, 3560],
          rows: [
            threeColHeaderRow("App", "Purpose", "Use Case for Furnixr"),
            threeColRow("Wishlist Plus", "Wishlist functionality", "Furniture is often a considered purchase; wishlists help", LIGHT_GOLD_BG),
            threeColRow("Growave", "Wishlist + reviews + loyalty", "All-in-one engagement suite", WHITE),
            threeColRow("Smile.io", "Points & rewards program", "Repeat purchases, referrals, brand advocacy", LIGHT_GOLD_BG),
            threeColRow("LoyaltyLion", "Premium loyalty program", "Tiered rewards for high-value repeat customers", WHITE),
          ]
        }),
        spacer(1),
  
        h2("4.5  Urgency, Scarcity & FOMO"),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2800, 3000, 3560],
          rows: [
            threeColHeaderRow("App", "Purpose", "Use Case for Furnixr"),
            threeColRow("Hextom: Urgent! Free Shipping", "Dynamic free shipping bar", "'Only Rs. 3,000 away from free shipping!'", LIGHT_GOLD_BG),
            threeColRow("Countdown Timer Bar", "Sale countdown timers", "Eid/seasonal sale urgency on banners", WHITE),
            threeColRow("FOMO", "Live social proof popups", "'Rahul from Mumbai just bought Console FXC16'", LIGHT_GOLD_BG),
            threeColRow("LimeSpot", "Real-time stock counter", "'Only 2 left' label drives urgency for limited items", WHITE),
          ]
        }),
        spacer(1),
  
        h2("4.6  Search & Product Discovery"),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2800, 3000, 3560],
          rows: [
            threeColHeaderRow("App", "Purpose", "Use Case for Furnixr"),
            threeColRow("Searchie / Boost AI Search", "AI-powered search & filters", "Better product findability across 100+ SKUs", LIGHT_GOLD_BG),
            threeColRow("Searchanise", "Smart search with autocomplete", "Instant results as customers type product names", WHITE),
            threeColRow("Instant Search+", "Fast search overlay", "Visual search results with images", LIGHT_GOLD_BG),
          ]
        }),
        spacer(1),
  
        h2("4.7  Visual Merchandising & Room Visualization"),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2800, 3000, 3560],
          rows: [
            threeColHeaderRow("App", "Purpose", "Use Case for Furnixr"),
            threeColRow("Threekit / Modloft AR", "3D/AR room visualization", "Let buyers see furniture in their own room via phone camera", LIGHT_GOLD_BG),
            threeColRow("Zakeke", "3D product viewer", "360-degree product views for premium showcasing", WHITE),
            threeColRow("Lookbook / Shoppable Images", "Instagram-style lookbooks", "Room scene images with clickable tagged products", LIGHT_GOLD_BG),
          ]
        }),
        spacer(1),
  
        h2("4.8  Customer Support & Live Chat"),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2800, 3000, 3560],
          rows: [
            threeColHeaderRow("App", "Purpose", "Use Case for Furnixr"),
            threeColRow("Tidio", "Live chat + chatbot", "Proactive chat: 'Need help choosing the right piece?'", LIGHT_GOLD_BG),
            threeColRow("WhatsApp Chat by WOZTELL", "WhatsApp integration", "Native WhatsApp chat widget (better than floating button)", WHITE),
            threeColRow("Gorgias", "Helpdesk + chat", "Unified inbox for WhatsApp, email, Instagram DMs", LIGHT_GOLD_BG),
            threeColRow("Re:amaze", "Multi-channel support", "Budget alternative to Gorgias for growing brands", WHITE),
          ]
        }),
        spacer(1),
  
        h2("4.9  SEO & Performance"),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2800, 3000, 3560],
          rows: [
            threeColHeaderRow("App", "Purpose", "Use Case for Furnixr"),
            threeColRow("Plug in SEO", "SEO audit & optimization", "Fix meta titles, image alt text, structured data", LIGHT_GOLD_BG),
            threeColRow("SEO Manager", "Comprehensive SEO toolkit", "Sitemap, redirects, JSON-LD schema for products", WHITE),
            threeColRow("TinyIMG", "Image compression & SEO", "Reduce load time; critical for image-heavy furniture sites", LIGHT_GOLD_BG),
            threeColRow("PageSpeed by Cloudflare", "CDN & performance", "Faster load = better rankings and conversion", WHITE),
          ]
        }),
        spacer(1),
  
        h2("4.10  Analytics & Conversion Tracking"),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2800, 3000, 3560],
          rows: [
            threeColHeaderRow("App", "Purpose", "Use Case for Furnixr"),
            threeColRow("Lucky Orange", "Heatmaps + session recordings", "See exactly where users drop off and what they click", LIGHT_GOLD_BG),
            threeColRow("Hotjar", "Heatmaps + user feedback", "Visual UX insights for continuous optimization", WHITE),
            threeColRow("Google Analytics 4", "Traffic & conversion tracking", "Full funnel analysis, audience segmentation", LIGHT_GOLD_BG),
            threeColRow("Facebook Pixel / Meta CAPI", "Ad retargeting", "Retarget visitors with the exact products they viewed", WHITE),
            threeColRow("Triple Whale", "Shopify analytics dashboard", "Unified ROAS, LTV, and attribution reporting", LIGHT_GOLD_BG),
          ]
        }),
        spacer(1),
  
        h2("4.11  Payment & Checkout"),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2800, 3000, 3560],
          rows: [
            threeColHeaderRow("App", "Purpose", "Use Case for Furnixr"),
            threeColRow("Razorpay / PayU", "Indian payment gateway", "UPI, EMI, COD, cards — essential for Indian market", LIGHT_GOLD_BG),
            threeColRow("Cashfree Payments", "Faster payouts + COD", "Strong COD reconciliation for furniture orders", WHITE),
            threeColRow("Simpl / ZestMoney", "Buy Now Pay Later", "EMI option for high-ticket furniture purchases", LIGHT_GOLD_BG),
            threeColRow("Shop Pay (Shopify)", "Accelerated checkout", "1-click checkout for returning customers", WHITE),
          ]
        }),
        spacer(1),
  
        h2("4.12  Inventory & Operations"),
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2800, 3000, 3560],
          rows: [
            threeColHeaderRow("App", "Purpose", "Use Case for Furnixr"),
            threeColRow("Back In Stock", "Restock alert emails/SMS", "Capture demand for sold-out premium pieces", LIGHT_GOLD_BG),
            threeColRow("ShipRocket / Delhivery", "Shipping & logistics", "Pan-India delivery tracking and management", WHITE),
            threeColRow("Shipway", "Order tracking page", "Branded tracking page reduces 'Where is my order?' queries", LIGHT_GOLD_BG),
            threeColRow("Returnly / Loop Returns", "Returns management", "Self-service returns reduce support load", WHITE),
          ]
        }),
  
        spacer(1),
        new Paragraph({ children: [new PageBreak()] }),
  
        // ============ SECTION 5: THEME RECOMMENDATION ============
        h1("5. Shopify Theme Recommendation"),
        divider(),
        body("The current theme is functional but generic. For a conversion-focused luxury furniture brand, we recommend upgrading to one of the following:"),
        spacer(1),
  
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [2200, 1800, 5360],
          rows: [
            new TableRow({
              tableHeader: true,
              children: [
                new TableCell({ borders, width: { size: 2200, type: WidthType.DXA }, shading: { fill: BRAND_DARK, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Theme", bold: true, size: 22, font: "Arial", color: WHITE })] })] }),
                new TableCell({ borders, width: { size: 1800, type: WidthType.DXA }, shading: { fill: BRAND_DARK, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Price", bold: true, size: 22, font: "Arial", color: WHITE })] })] }),
                new TableCell({ borders, width: { size: 5360, type: WidthType.DXA }, shading: { fill: BRAND_DARK, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Why Recommended", bold: true, size: 22, font: "Arial", color: WHITE })] })] }),
              ]
            }),
            new TableRow({ children: [
              new TableCell({ borders, width: { size: 2200, type: WidthType.DXA }, shading: { fill: LIGHT_GOLD_BG, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Prestige (Shopify)", size: 20, font: "Arial", bold: true, color: BRAND_GOLD })] })] }),
              new TableCell({ borders, width: { size: 1800, type: WidthType.DXA }, shading: { fill: LIGHT_GOLD_BG, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "$350 USD", size: 20, font: "Arial" })] })] }),
              new TableCell({ borders, width: { size: 5360, type: WidthType.DXA }, shading: { fill: LIGHT_GOLD_BG, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Built for luxury/high-end brands; editorial layouts, lookbooks, mega menus, video hero", size: 20, font: "Arial" })] })] }),
            ]}),
            new TableRow({ children: [
              new TableCell({ borders, width: { size: 2200, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Impact (Shopify)", size: 20, font: "Arial", bold: true, color: BRAND_GOLD })] })] }),
              new TableCell({ borders, width: { size: 1800, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "$380 USD", size: 20, font: "Arial" })] })] }),
              new TableCell({ borders, width: { size: 5360, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Full-screen hero video, advanced product filtering, built-in before/after sliders", size: 20, font: "Arial" })] })] }),
            ]}),
            new TableRow({ children: [
              new TableCell({ borders, width: { size: 2200, type: WidthType.DXA }, shading: { fill: LIGHT_GOLD_BG, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Symmetry (Shopify)", size: 20, font: "Arial", bold: true, color: BRAND_GOLD })] })] }),
              new TableCell({ borders, width: { size: 1800, type: WidthType.DXA }, shading: { fill: LIGHT_GOLD_BG, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "$320 USD", size: 20, font: "Arial" })] })] }),
              new TableCell({ borders, width: { size: 5360, type: WidthType.DXA }, shading: { fill: LIGHT_GOLD_BG, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Popular for furniture brands; image-forward, customizable sections, sticky add-to-cart", size: 20, font: "Arial" })] })] }),
            ]}),
            new TableRow({ children: [
              new TableCell({ borders, width: { size: 2200, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Xclusive (ThemeForest)", size: 20, font: "Arial", bold: true, color: BRAND_GOLD })] })] }),
              new TableCell({ borders, width: { size: 1800, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "$79 USD", size: 20, font: "Arial" })] })] }),
              new TableCell({ borders, width: { size: 5360, type: WidthType.DXA }, shading: { fill: WHITE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Budget option with luxury look; furniture-specific demo, good product page layout", size: 20, font: "Arial" })] })] }),
            ]}),
          ]
        }),
        spacer(1),
        body("Recommendation: Start with Prestige or Symmetry for the best balance of luxury aesthetics and built-in conversion features."),
  
        spacer(1),
        new Paragraph({ children: [new PageBreak()] }),
  
        // ============ SECTION 6: MARKETING INTEGRATIONS ============
        h1("6. Marketing & Growth Integrations"),
        divider(),
  
        h2("6.1  WhatsApp Marketing (Critical for South Asian Market)"),
        bullet("Integrate WhatsApp Business API via Interakt, WATI, or AiSensy"),
        bullet("Set up automated flows: Order confirmation, shipping update, delivery confirmation"),
        bullet("Create broadcast lists for promotions (festival sales, new arrivals)"),
        bullet("Enable WhatsApp catalog — customers can browse and order via WhatsApp"),
        bullet("Use click-to-chat links in all email and SMS campaigns"),
        spacer(1),
  
        h2("6.2  Meta Ads (Facebook & Instagram)"),
        bullet("Install Meta Pixel and Conversions API (CAPI) for accurate tracking"),
        bullet("Set up Dynamic Product Ads — automatically retarget visitors with exact products viewed"),
        bullet("Create Advantage+ Shopping Campaigns for broad prospecting"),
        bullet("Build Lookalike Audiences from existing customer list"),
        bullet("Run Instagram Shopping — tag products directly in Instagram posts and reels"),
        spacer(1),
  
        h2("6.3  Google Ads & SEO"),
        bullet("Set up Google Shopping campaigns with optimized product feed"),
        bullet("Run Performance Max campaigns for full Google network coverage"),
        bullet("Target high-intent keywords: 'metal console table India', 'gold furniture online', 'luxury bed frame India'"),
        bullet("Add structured data (JSON-LD) for Product, Review, and BreadcrumbList schema"),
        bullet("Build a blog on the site: 'How to Style a Gold Console Table', '5 Metallic Furniture Trends 2026'"),
        spacer(1),
  
        h2("6.4  CRM & Customer Data"),
        bullet("Integrate Klaviyo or Omnisend as the central customer data platform"),
        bullet("Build customer segments: First-time buyers, Repeat buyers, High-value customers, Lapsed (90+ days)"),
        bullet("Automate lifecycle flows: Welcome series, Post-purchase, Win-back, Birthday/anniversary"),
        bullet("Sync customer data between Shopify, WhatsApp, and email for unified communication"),
  
        spacer(1),
        new Paragraph({ children: [new PageBreak()] }),
  
        // ============ SECTION 7: TRUST & BRAND ============
        h1("7. Trust Building & Brand Elevation"),
        divider(),
  
        h2("7.1  Trust Signals to Add Across the Site"),
        bullet("SSL security badge in footer"),
        bullet("Payment gateway logos (Razorpay, Visa, Mastercard, UPI, COD)"),
        bullet("'Secure Checkout' messaging near cart and checkout buttons"),
        bullet("Display GST-registered business information"),
        bullet("Physical address and business registration if applicable"),
        bullet("'Made in India' or 'Handcrafted' badge if applicable — huge trust signal"),
        spacer(1),
  
        h2("7.2  Content to Create"),
        bullet("'About Us' page: Brand story, founder story, workshop/factory photos, craftsmanship values"),
        bullet("'How It's Made' page or video: Show the metalwork process — this is a huge differentiator"),
        bullet("'Size Guide' page for furniture dimensions with room planning tips"),
        bullet("'Care & Maintenance' guide for metal furniture"),
        bullet("FAQ page: Delivery timelines, custom orders, material questions, return policy"),
        spacer(1),
  
        h2("7.3  Remove or Fix"),
        bullet("Remove all watermarks from product images — they undermine trust and premium positioning"),
        bullet("Ensure all product names are consistent (FXC format is fine; add descriptive subtitle)"),
        bullet("Fix category naming inconsistency: 'SittingX' vs 'ChairX' — standardize the naming convention"),
        bullet("Add proper product descriptions — currently most likely missing or minimal"),
  
        spacer(1),
        new Paragraph({ children: [new PageBreak()] }),
  
        // ============ SECTION 8: IMPLEMENTATION ROADMAP ============
        h1("8. Implementation Roadmap"),
        divider(),
        body("Recommended phased approach to minimize disruption while maximizing impact:"),
        spacer(1),
  
        infoBox("Phase 1 — Foundation (Week 1–2) | Priority: Critical Fixes", [
          "  \u2022  Remove all product image watermarks and add professional photos",
          "  \u2022  Install new theme (Prestige or Symmetry)",
          "  \u2022  Set up proper footer with policies, contact, and payment badges",
          "  \u2022  Add announcement bar with offer or trust message",
          "  \u2022  Make header sticky",
          "  \u2022  Install Judge.me or Loox and begin collecting reviews",
          "  \u2022  Install Razorpay and enable UPI/EMI payment options",
          "  \u2022  Install Meta Pixel + Google Analytics 4",
        ], LIGHT_GOLD_BG),
        spacer(1),
  
        infoBox("Phase 2 — Conversion Optimization (Week 3–4) | Priority: Revenue Impact", [
          "  \u2022  Redesign homepage with new hero, trust strip, social proof section",
          "  \u2022  Upgrade product pages with proper descriptions, trust badges, sticky CTA",
          "  \u2022  Add quick-view on collection pages",
          "  \u2022  Install cart slide-out drawer and free shipping progress bar (Hextom)",
          "  \u2022  Install Frequently Bought Together for upsells",
          "  \u2022  Set up Klaviyo abandoned cart automation (minimum 3-email sequence)",
          "  \u2022  Install Wishlist Plus",
          "  \u2022  WhatsApp integration via WATI or Interakt",
        ], "E8F4E8"),
        spacer(1),
  
        infoBox("Phase 3 — Growth & Retention (Week 5–8) | Priority: Scale", [
          "  \u2022  Launch loyalty program (Smile.io or Growave)",
          "  \u2022  Set up Instagram Shopping and Meta Dynamic Product Ads",
          "  \u2022  Implement Google Shopping feed and Performance Max campaign",
          "  \u2022  Add FOMO / social proof popups (FOMO app)",
          "  \u2022  Build room inspiration lookbook pages",
          "  \u2022  Add 3D viewer for top 10 products (Zakeke)",
          "  \u2022  Launch referral program",
          "  \u2022  Start content blog for SEO",
          "  \u2022  Set up heatmaps and session recording (Lucky Orange) for ongoing CRO",
        ], "E8EEF8"),
  
        spacer(1),
        new Paragraph({ children: [new PageBreak()] }),
  
        // ============ SECTION 9: BUDGET ============
        h1("9. Budget Estimate"),
        divider(),
        body("Approximate monthly recurring costs for the full recommended app stack:"),
        spacer(1),
  
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [4000, 2000, 3360],
          rows: [
            new TableRow({
              tableHeader: true,
              children: [
                new TableCell({ borders, width: { size: 4000, type: WidthType.DXA }, shading: { fill: BRAND_DARK, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "App / Service", bold: true, size: 22, font: "Arial", color: WHITE })] })] }),
                new TableCell({ borders, width: { size: 2000, type: WidthType.DXA }, shading: { fill: BRAND_DARK, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Est. Cost/mo", bold: true, size: 22, font: "Arial", color: WHITE })] })] }),
                new TableCell({ borders, width: { size: 3360, type: WidthType.DXA }, shading: { fill: BRAND_DARK, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Category", bold: true, size: 22, font: "Arial", color: WHITE })] })] }),
              ]
            }),
            ...([
              ["New Shopify Theme (one-time)", "$320–380 one-time", "Design"],
              ["Judge.me (reviews)", "$15 USD", "Social Proof"],
              ["Klaviyo (email/SMS)", "$45–100 USD", "Retention"],
              ["ReConvert (post-purchase upsell)", "$15 USD", "AOV"],
              ["Hextom Urgent! Bar", "$10 USD", "Conversion"],
              ["Wishlist Plus", "$10 USD", "Retention"],
              ["Tidio (live chat)", "$19 USD", "Support"],
              ["WATI (WhatsApp API)", "$49 USD", "Marketing"],
              ["Lucky Orange (heatmaps)", "$18 USD", "Analytics"],
              ["Smile.io (loyalty)", "$49 USD", "Retention"],
              ["Boost AI Search", "$19 USD", "Discovery"],
              ["FOMO (social proof)", "$19 USD", "Conversion"],
            ]).map(([app, cost, cat], i) => new TableRow({
              children: [
                new TableCell({ borders, width: { size: 4000, type: WidthType.DXA }, shading: { fill: i % 2 === 0 ? LIGHT_GOLD_BG : WHITE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: app, size: 20, font: "Arial" })] })] }),
                new TableCell({ borders, width: { size: 2000, type: WidthType.DXA }, shading: { fill: i % 2 === 0 ? LIGHT_GOLD_BG : WHITE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: cost, size: 20, font: "Arial" })] })] }),
                new TableCell({ borders, width: { size: 3360, type: WidthType.DXA }, shading: { fill: i % 2 === 0 ? LIGHT_GOLD_BG : WHITE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: cat, size: 20, font: "Arial" })] })] }),
              ]
            })),
            new TableRow({
              children: [
                new TableCell({ borders, width: { size: 4000, type: WidthType.DXA }, shading: { fill: BRAND_GOLD, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "TOTAL MONTHLY (excl. one-time theme)", bold: true, size: 22, font: "Arial", color: WHITE })] })] }),
                new TableCell({ borders, width: { size: 2000, type: WidthType.DXA }, shading: { fill: BRAND_GOLD, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "~$269/mo", bold: true, size: 22, font: "Arial", color: WHITE })] })] }),
                new TableCell({ borders, width: { size: 3360, type: WidthType.DXA }, shading: { fill: BRAND_GOLD, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "~Rs. 22,500/month", bold: true, size: 22, font: "Arial", color: WHITE })] })] }),
              ]
            }),
          ]
        }),
        spacer(1),
        body("Note: Start with Phase 1 apps only (~$90/month) and add more as revenue grows. Many apps have free tiers to get started."),
  
        spacer(1),
        new Paragraph({ children: [new PageBreak()] }),
  
        // ============ SECTION 10: KPIs ============
        h1("10. Key Performance Indicators to Track"),
        divider(),
        body("Post-launch, monitor these metrics weekly to measure the impact of the redesign:"),
        spacer(1),
  
        new Table({
          width: { size: 9360, type: WidthType.DXA },
          columnWidths: [3500, 2000, 3860],
          rows: [
            new TableRow({
              tableHeader: true,
              children: [
                new TableCell({ borders, width: { size: 3500, type: WidthType.DXA }, shading: { fill: BRAND_DARK, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "KPI", bold: true, size: 22, font: "Arial", color: WHITE })] })] }),
                new TableCell({ borders, width: { size: 2000, type: WidthType.DXA }, shading: { fill: BRAND_DARK, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "Target", bold: true, size: 22, font: "Arial", color: WHITE })] })] }),
                new TableCell({ borders, width: { size: 3860, type: WidthType.DXA }, shading: { fill: BRAND_DARK, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: "Tool to Track", bold: true, size: 22, font: "Arial", color: WHITE })] })] }),
              ]
            }),
            ...([
              ["Conversion Rate", "2.5–4%", "Google Analytics 4, Shopify"],
              ["Average Order Value (AOV)", "+25% growth", "Shopify Analytics"],
              ["Cart Abandonment Rate", "Below 65%", "Klaviyo, Shopify"],
              ["Email Open Rate", "35%+", "Klaviyo"],
              ["WhatsApp Conversion Rate", "8%+", "WATI / Interakt"],
              ["Bounce Rate", "Below 45%", "Google Analytics 4"],
              ["Page Load Time", "Under 3 seconds", "Google PageSpeed"],
              ["Review Count Growth", "+50/month", "Judge.me / Loox"],
              ["Return Customer Rate", "25%+", "Shopify / Klaviyo"],
            ]).map(([kpi, target, tool], i) => new TableRow({
              children: [
                new TableCell({ borders, width: { size: 3500, type: WidthType.DXA }, shading: { fill: i % 2 === 0 ? LIGHT_GOLD_BG : WHITE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: kpi, size: 20, font: "Arial", bold: true })] })] }),
                new TableCell({ borders, width: { size: 2000, type: WidthType.DXA }, shading: { fill: i % 2 === 0 ? LIGHT_GOLD_BG : WHITE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: target, size: 20, font: "Arial", color: ACCENT_GREEN })] })] }),
                new TableCell({ borders, width: { size: 3860, type: WidthType.DXA }, shading: { fill: i % 2 === 0 ? LIGHT_GOLD_BG : WHITE, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 140, right: 140 }, children: [new Paragraph({ children: [new TextRun({ text: tool, size: 20, font: "Arial" })] })] }),
              ]
            }))
          ]
        }),
  
        spacer(1),
        new Paragraph({ children: [new PageBreak()] }),
  
        // ============ SECTION 11: CONCLUSION ============
        h1("11. Conclusion & Next Steps"),
        divider(),
        body("Furnixr has exceptional products and a distinctive brand identity. The gap between the current site and the brand's true potential is a conversion architecture problem, not a product problem."),
        spacer(1),
        body("With the changes outlined in this document, Furnixr can realistically expect:"),
        bullet("2x–3x improvement in conversion rate within 60 days"),
        bullet("25–40% increase in Average Order Value from upsells and bundles"),
        bullet("Significant reduction in cart abandonment through email/WhatsApp automation"),
        bullet("Stronger brand positioning as a premium, trustworthy furniture brand"),
        bullet("A scalable foundation for pan-India growth and potential international expansion"),
        spacer(1),
        body("Recommended immediate next steps:"),
        new Paragraph({ numbering: { reference: "numbered", level: 0 }, spacing: { before: 40, after: 40 }, children: [new TextRun({ text: "Approve the redesign scope and phase priorities", size: 22, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbered", level: 0 }, spacing: { before: 40, after: 40 }, children: [new TextRun({ text: "Remove watermarks and source proper product photography immediately", size: 22, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbered", level: 0 }, spacing: { before: 40, after: 40 }, children: [new TextRun({ text: "Select and purchase the new Shopify theme", size: 22, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbered", level: 0 }, spacing: { before: 40, after: 40 }, children: [new TextRun({ text: "Install GA4, Meta Pixel, and Judge.me as the first three apps (free/low cost, high impact)", size: 22, font: "Arial" })] }),
        new Paragraph({ numbering: { reference: "numbered", level: 0 }, spacing: { before: 40, after: 40 }, children: [new TextRun({ text: "Begin collecting reviews from existing customers via WhatsApp", size: 22, font: "Arial" })] }),
        spacer(1),
        divider(),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 200, after: 100 },
          children: [new TextRun({ text: "Document prepared for Furnixr Website Redesign Project", size: 20, font: "Arial", color: "888888", italics: true })]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 60, after: 60 },
          children: [new TextRun({ text: "May 2026  |  furnixr.com", size: 20, font: "Arial", color: "888888" })]
        }),
      ]
    }]
  });
  
  Packer.toBuffer(doc).then(buffer => {
    fs.writeFileSync('/mnt/user-data/outputs/Furnixr_Website_Redesign_Proposal.docx', buffer);
    console.log('Done!');
  });