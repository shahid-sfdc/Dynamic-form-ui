# ⚡ Dynamic Account Creation Form (Custom LWC)

This project is a fully customized **Lightning Web Component (LWC)** built to create Account records dynamically.  
Instead of using the standard Salesforce record form, I built this form from scratch — handling record creation manually using Apex and JavaScript Promises.

## 🌟 Overview

The form includes all key Account fields such as:
- **Parent Account** lookup  
- **Account Name**  
- **SLA Expiration Date**  
- **SLA Type** (Gold, Silver, Platinum, Bronze)  
- **Number of Locations** (using a slider)  
- **Description** (rich text area)

- Every part of this form is custom-built, giving complete control over logic, validation, and user experience.

## 🧠 What I Worked On

- Created a **dynamic form UI** without using standard Salesforce form components.  
- Fetched **Parent Account options** from Apex and displayed them in a combobox.  
- Implemented record creation using **Promise-based Apex calls**.  
- Used **checkValidity()** to validate input fields before saving.  
- Designed a clean and simple UI using `lightning-input`, `lightning-combobox`, and `lightning-slider`.  
- Retrieved and logged the **newly created Account ID** once the record was inserted successfully.

- 🖼️ Screenshot
<img width="479" height="412" alt="Screenshot 2025-10-30 at 7 14 19 PM" src="https://github.com/user-attachments/assets/ce08558c-7145-43ee-9ea0-9c4a7a86aee2" />



🎯 Key Highlights

Built without using lightning-record-form — everything handled manually.

Promise-based record creation gives better control and flexibility.

Dynamic SLA selection buttons for a modern look.

Slider input to select number of locations.

Simple, responsive layout designed to look native to Salesforce.
