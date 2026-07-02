---
title: "Fee-for-service vs. DRG vs. case rate: what's in your payer's file"
description: "MRF and TiC files often look like fee-for-service data, but the underlying pricing methodology may be DRG, APC, or case rate. Here's why that matters for comparisons."
date: "2026-03-15"
author: "PayerParity"
published: true
---

When hospitals and payers look at price transparency files, a common mistake is assuming every rate is **fee-for-service (FFS)** — a flat dollar amount per service. In practice, CMS and commercial payers use several different pricing methodologies, and the methodology behind a given rate affects whether two numbers can be compared at all.

## The main pricing methodologies

### Fee-for-Service (FFS)

A flat, per-service fee. This is the methodology many people assume when they see a dollar amount next to a billing code. But it is not universal — and MRF files often present rates in a way that *looks* like FFS even when the underlying contract uses a different methodology.

### DRG / MS-DRG

For **inpatient hospital stays**, CMS uses Diagnosis-Related Groups (DRGs) under the Inpatient Prospective Payment System (IPPS). Commercial payers frequently express inpatient rates as a percentage of the Medicare DRG payment. This is a bundled methodology — one payment for the entire stay — not a per-service fee.

Hospital inpatient claims are billed and reimbursed under MS-DRG codes, not CPT codes (which apply to outpatient and professional billing).

### APC (Ambulatory Payment Classification)

A bundled **outpatient** methodology. APC groups outpatient services into payment categories. Comparing an APC rate to a DRG rate is not a valid comparison, even if both appear as dollar amounts in a transparency file.

### Case Rate

A bundled, non-FFS rate for an **episode of care**. Common in orthopedics, cardiology, and other service lines where payers bundle an entire procedure or recovery period into one payment.

### Case Rate Per Diem

A bundled daily rate, also non-FFS. Used in some inpatient and post-acute settings where payment is structured around length of stay rather than a fixed DRG amount.

## Why methodology matching matters

Imagine you find two rates in a payer's transparency file for what appears to be the same service at two different hospitals. If one rate is priced as a DRG percentage and the other as a case rate, the dollar difference between them may reflect methodology — not payer inconsistency.

A payer's contracting team will raise this immediately: *"Those aren't the same type of rate."* And they'll be right.

**Valid comparisons require the same code and the same pricing methodology.** DRG-to-DRG. Case rate-to-case rate. FFS-to-FFS.

## What PayerParity does differently

Decoding which pricing methodology actually underlies a given disclosed rate is part of what PayerParity does — it's not just file retrieval. Before any gap is presented as negotiation leverage, we confirm:

1. Both rates use the same underlying methodology
2. Both rates apply to the same billing code
3. Legitimate CMS payment differences (wage index, teaching status, DSH, etc.) are accounted for

This is the difference between a comparison a payer can dismiss in thirty seconds and one that holds up across the negotiating table.

Want to see what an methodology-aware comparison looks like for your facility? [Request a free Parity Report](/contact?type=report).
