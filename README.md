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
<img width="463" height="601" alt="Screenshot 2025-11-01 at 11 53 42 AM" src="https://github.com/user-attachments/assets/a9ba0196-cb49-480e-bc84-5821ae5fc8db" />
<img width="479" height="596" alt="Screenshot 2025-11-01 at 11 54 17 AM" src="https://github.com/user-attachments/assets/907a0564-9d65-47b8-a0a9-f838b6bcfd70" />
<img width="1419" height="578" alt="Screenshot 2025-11-01 at 11 54 39 AM" src="https://github.com/user-attachments/assets/eb42e199-4d38-4ac7-a9ff-11ee3909de50" />
<img width="951" height="643" alt="Screenshot 2025-11-01 at 11 55 10 AM" src="https://github.com/user-attachments/assets/410e90ee-e321-425e-87d6-3d69be925f16" />







🎯 Key Highlights

Built without using lightning-record-form — everything handled manually.

Promise-based record creation gives better control and flexibility.

Dynamic SLA selection buttons for a modern look.

Slider input to select number of locations.

Simple, responsive layout designed to look native to Salesforce.
