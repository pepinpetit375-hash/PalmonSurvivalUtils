/* Global Styles */
body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    margin: 0;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

input[type="text"],
input[type="number"],
select {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: border-color 0.3s;
    -moz-appearance: textfield;
}

input[type="text"]:focus,
input[type="number"]:focus,
select:focus {
    outline: none;
    border-color: #667eea;
}

select {
    cursor: pointer;
    background-color: white;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

/* Navigation Bar */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.95) 0%, rgba(118, 75, 162, 0.95) 100%);
    padding: 15px 30px;
    display: flex;
    gap: 15px;
    backdrop-filter: blur(10px);
    z-index: 99;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.navbar a {
    color: white;
    text-decoration: none;
    font-weight: 600;
    cursor: pointer;
    padding: 10px 20px;
    border-radius: 8px;
    transition: all 0.3s ease;
    background: rgba(255, 255, 255, 0.1);
    font-size: 15px;
    position: relative;
    overflow: hidden;
}

.navbar a::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.navbar a:hover::before {
    left: 100%;
}

.navbar a:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.navbar a.active {
    background: white;
    color: #667eea;
    box-shadow: 0 4px 12px rgba(255, 255, 255, 0.3);
}

/* Page Container */
.page {
    display: none;
    width: 100%;
}

.page.active {
    display: block;
}

.container {
    width: 100%;
    max-width: 800px;
    background-color: white;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
    padding: 30px;
    box-sizing: border-box;
    margin: auto;
    margin-top: 80px;
}

.header {
    text-align: center;
    margin-bottom: 30px;
    padding: 20px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

h1 {
    color: white;
    margin: 0;
    font-size: 28px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    line-height: 1.3;
}

/* --- DOWNLOADS PAGE STYLES --- */

.download-section {
    margin: 30px 0;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    background-color: #f9f9f9;
}

.section-title {
    color: #2c3e50; /* Dark blue/gray */
    margin-top: 0;
    border-bottom: 2px solid #3498db; /* A blue line for emphasis */
    padding-bottom: 5px;
    margin-bottom: 15px;
}

/* Primary Download Button Style */
.download-all-btn {
    display: inline-block;
    padding: 12px 25px;
    margin: 15px 0 20px 0;
    font-size: 1.1em;
    font-weight: bold;
    color: #ffffff;
    background-color: #2ecc71; /* Green color for action/download */
    border: none;
    border-radius: 5px;
    text-decoration: none; /* Remove underline from <a> tag */
    text-align: center;
    transition: background-color 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.download-all-btn:hover {
    background-color: #27ae60; /* Darker green on hover */
}

.img-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 500;
}

.img-modal img {
    max-width: 90%;
    max-height: 90%;
    border-radius: 8px;
}

.img-modal span {
    position: absolute;
    top: 20px;
    right: 30px;
    font-size: 40px;
    color: white;
    cursor: pointer;
}

/* Individual File List */
.file-list {
    list-style-type: none;
    padding-left: 0;
    max-height: 200px; /* Limit height for organization */
    overflow-y: auto; /* Enable scrolling if list is too long */
    border: 1px solid #eee;
    padding: 10px;
    border-radius: 4px;
    background-color: #fff;
}

.file-list li {
    padding: 5px 0;
    border-bottom: 1px dotted #eee;
    font-size: 0.95em;
}

.file-list li a {
    color: #3498db;
    text-decoration: none;
}

.file-list li a:hover {
    text-decoration: underline;
}

/* --- IMAGE PREVIEW STYLES --- */

/* Reusing existing collapsible styles from Squad Page */
.collapsible-tip {
    margin-top: 20px;
}

.collapsible-toggle {
    /* Style to match your existing button for the collapsible area */
    background-color: #ecf0f1;
    color: #333;
    cursor: pointer;
    padding: 10px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 1em;
    border-radius: 4px;
    transition: background-color 0.2s;
}

.collapsible-toggle:hover {
    background-color: #dcdde1;
}

.collapsible-content {
    padding: 15px;
    background-color: #ffffff;
    border: 1px solid #ddd;
    border-top: none;
    border-radius: 0 0 4px 4px;
    overflow: hidden;
}

.preview-note {
    font-style: italic;
    color: #777;
    margin-top: 15px;
    text-align: center;
}

/* Image Grid */
.image-preview-grid {
    display: grid;
    /* Adjust based on screen size, e.g., 5 columns */
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); 
    gap: 15px;
    padding: 10px;
    overflow-y: auto;
    border: 2px solid #ddd; /* A subtle border for the container */
    border-radius: 8px;
    background-color: #f0f4f8; /* Very light blue background */
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05); /* Inner shadow for depth */
 }
 
 .image-preview-item {
    text-align: center;
    border: 1px solid #eee;
    border-radius: 4px;
    padding: 5px;
    background-color: #f7f7f7;
    transition: transform 0.2s;
}

.image-preview-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.image-preview-item img {
    width: 100%;
    height: auto;
    max-height: 80px;
    object-fit: contain; /* Ensure the image fits nicely */
    display: block;
    margin-bottom: 5px;
}

.image-preview-item span {
    display: block;
    font-size: 0.8em;
    color: #555;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.author {
    color: rgba(255, 255, 255, 0.9);
    font-style: italic;
    margin-top: 8px;
    font-size: 14px;
}

/* Form Elements */
.form-group {
    margin-bottom: 10px;
}

label {
    display: block;
    font-weight: 600;
    color: #333;
}

textarea {
    width: 100%;
    padding: 12px;
    font-size: 16px;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    box-sizing: border-box;
    margin-top: 8px;
    resize: vertical;
    min-height: 100px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: border-color 0.3s;
}

textarea:focus {
    outline: none;
    border-color: #667eea;
}

.form-group label input[type="checkbox"] {
    margin-right: 8px;
    cursor: pointer;
    width: 18px;
    height: 18px;
    vertical-align: middle;
}

/* Color Set Group */
.color-set-group {
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 20px;
}

.color-set-group legend {
    font-weight: 600;
    padding: 0 10px;
    color: #333;
}

.color-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
}

.color-option {
    display: flex;
    align-items: center;
}

.color-option input {
    margin-right: 8px;
    cursor: pointer;
    width: 18px;
    height: 18px;
    flex-shrink: 0;
}

.color-label {
    font-family: 'Consolas', monospace;
    font-weight: bold;
    cursor: pointer;
}

/* Custom Colors */
.custom-colors-controls {
    margin-top: 15px;
    padding-top: 15px;
    border-top: 2px dashed #e0e0e0;
}

.color-picker-container {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;
    flex-wrap: wrap;
}

.color-picker-container input[type="color"] {
    width: 50px;
    height: 50px;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    cursor: pointer;
}

.custom-colors-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 10px;
}

.color-swatch {
    width: 40px;
    height: 40px;
    border: 2px solid #e0e0e0;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    transition: transform 0.2s;
}

.color-swatch:hover {
    transform: scale(1.1);
}

.color-swatch:hover::after {
    content: '×';
    position: absolute;
    top: -8px;
    right: -8px;
    background: #ff4757;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
}

/* Buttons */
button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 6px;
    padding: 12px 24px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    margin-right: 10px;
}

button:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

button:active {
    transform: translateY(0);
}

/* Display Panel */
.display-panel {
    border: 2px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    min-height: 150px;
    max-height: 300px;
    overflow-y: auto;
    background-color: #fcfcfe;
    margin-top: 20px;
    margin-bottom: 20px;
    font-family: 'Consolas', monospace;
    font-size: 18px;
    font-weight: bold;
    line-height: 1.5;
    word-wrap: break-word;
    white-space: pre-wrap;
}

.char-span {
    display: inline-block;
}

.space-char {
    display: inline-block;
    min-width: 8px;
}

/* Notification */
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 12px 24px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-radius: 6px;
    opacity: 0;
    transition: opacity 0.3s;
    pointer-events: none;
    font-weight: 600;
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);
}

.notification.show {
    opacity: 1;
}

/* Usage Section */
.usage-section {
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    border-radius: 8px;
    padding: 20px;
    margin-bottom: 25px;
}

.usage-section h3 {
    margin-top: 0;
    color: #333;
    font-size: 18px;
    margin-bottom: 15px;
}

.usage-steps {
    display: grid;
    gap: 12px;
}

.usage-step {
    display: flex;
    align-items: start;
    background: white;
    padding: 12px;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
}

.step-number {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    margin-right: 12px;
    flex-shrink: 0;
    font-size: 14px;
}

.step-text {
    flex: 1;
    color: #555;
    line-height: 1.6;
}

/* Stats Grid */
.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
}

/* Table Styles */
table {
    width: 100%;
    border-collapse: collapse;
    background: white;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

thead {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

th {
    padding: 12px;
    text-align: left;
    font-weight: 600;
}

th.center {
    text-align: center;
}

tbody tr {
    border-bottom: 1px solid #e0e0e0;
}

tbody tr:hover {
    background-color: #f8f9fa;
}

td {
    padding: 4px;
}

td.center {
    text-align: center;
}

td.name {
    font-weight: 600;
}

/* Role and Element Badges */
.role-badge {
    white-space: nowrap;
    display: inline-block;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    color: white;
}

.role-badge.tank {
    background: #0096A0;
}

.role-badge.dps {
    background: #C84616;
}

.element-badge {
    display: inline-block;
    white-space: nowrap;
    padding: 4px 12px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 600;
    color: white;
    margin-left: 5px;
}

.element-badge.water {
    background: linear-gradient(135deg, #4FC3F7 0%, #0288D1 100%);
}

.element-badge.fire {
    background: linear-gradient(135deg, #FF7043 0%, #D32F2F 100%);
}

.element-badge.earth {
    background: linear-gradient(135deg, #8D6E63 0%, #5D4037 100%);
}

.element-badge.electric {
    background: linear-gradient(135deg, #FFD54F 0%, #F57C00 100%);
}

/* Delete Button */
.delete-btn {
    background: linear-gradient(135deg, #ff6b6b 0%, #ee5a6f 100%);
    color: white;
    border: none;
    border-radius: 4px;
    padding: 6px 12px;
    font-size: 14px;
    cursor: pointer;
    transition: transform 0.2s;
    margin: 0;
}

.delete-btn:hover {
    transform: scale(1.05);
}

.table-wrapper {
    overflow-x: auto;
    margin: 30px 0;
}

.empty-state {
    padding: 30px;
    text-align: center;
    color: #999;
}

/* Calculate Section */
.calculate-section {
    text-align: center;
    margin: 30px 0;
}

.calculate-section button {
    font-size: 18px;
    padding: 15px 40px;
}

.calculation-warning {
    margin-top: 15px;
    padding: 12px;
    background: linear-gradient(135deg, #fff3cd 0%, #ffe69c 100%);
    border: 2px solid #ffc107;
    border-radius: 6px;
    color: #856404;
    font-weight: 600;
}

/* Squad Results */
.squads-results {
    display: none;
    margin-top: 30px;
}

.squads-results h3 {
    color: #333;
    margin-bottom: 20px;
    text-align: center;
    font-size: 22px;
}

.squads-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.squad-card {
    background: linear-gradient(135deg, #f5f7fa 0%, #e8eaf6 100%);
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border: 2px solid #b39ddb;
    transition: transform 0.2s, box-shadow 0.2s;
}

.squad-card:hover {
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);
}

.squad-card h4 {
    color: #667eea;
    margin: 0 0 15px 0;
    text-align: center;
    font-size: 18px;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.squad-stats {
    background: white;
    padding: 15px;
    border-radius: 8px;
    margin-bottom: 15px;
    border: 2px solid #b39ddb;
}

.stat-row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid #e0e0e0;
    font-size: 14px;
}

.stat-row:last-child {
    border-bottom: none;
}

.stat-label {
    font-weight: 600;
    color: #667eea;
}

.stat-value {
    font-weight: 700;
    color: #333;
}

.squad-card ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.squad-card ul li {
    background: white;
    padding: 10px 15px;
    margin-bottom: 8px;
    border-radius: 6px;
    color: #333;
    font-weight: 500;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    border-left: 3px solid #667eea;
    transition: transform 0.2s;
}

.squad-card ul li:hover {
    transform: translateX(4px);
}

/* Switch Field */
.switch-field {
    display: flex;
    margin-bottom: 36px;
    user-select: none;
}

.switch-field input {
    position: absolute !important;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    width: 1px;
    border: 0;
    overflow: hidden;
}

.switch-field label {
    background-color: #e4e4e4;
    color: rgba(0, 0, 0, 0.6);
    font-size: 18px;
    line-height: 1;
    text-align: center;
    padding: 8px 16px;
    margin-right: -1px;
    border: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.3), 0 1px rgba(255, 255, 255, 0.1);
    transition: all 0.1s ease-in-out;
}

.switch-field label:hover {
    cursor: pointer;
}

.switch-field input:checked + label {
    background-color: #aaa5ea;
    box-shadow: none;
    color: white;
}

.switch-field label:first-of-type {
    border-radius: 4px 0 0 4px;
    border-right-width: 2px;
}

.switch-field label:last-of-type {
    border-radius: 0 4px 4px 0;
}

.element-btn {
    flex: 1;
    min-width: 100px;
    padding: 12px 16px;
    border: 2px solid #e0e0e0;
    background: white;
    color: #666;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

input:checked + label.water {
    background: linear-gradient(135deg, #4FC3F7 0%, #0288D1 100%);
    color: white;
    border-color: #0288D1;
    box-shadow: 0 4px 12px rgba(2, 136, 209, 0.4);
}

input:checked + label.fire {
    background: linear-gradient(135deg, #FF7043 0%, #D32F2F 100%);
    color: white;
    border-color: #D32F2F;
    box-shadow: 0 4px 12px rgba(211, 47, 47, 0.4);
}

input:checked + label.earth {
    background: linear-gradient(135deg, #8D6E63 0%, #5D4037 100%);
    color: white;
    border-color: #5D4037;
    box-shadow: 0 4px 12px rgba(93, 64, 55, 0.4);
}

input:checked + label.electric {
    background: linear-gradient(135deg, #FFD54F 0%, #F57C00 100%);
    color: white;
    border-color: #F57C00;
    box-shadow: 0 4px 12px rgba(245, 124, 0, 0.4);
}

.tip-box {
    background: linear-gradient(135deg, #fff7d6 0%, #ffe8a3 100%);
    border-left: 4px solid #ffb400;
    padding: 15px 18px;
    border-radius: 8px;
    margin-bottom: 20px;
    color: #5a4a00;
    font-size: 15px;
    line-height: 1.6;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
}

.collapsible-tip {
    margin-bottom: 25px;
}

.collapsible-toggle {
    width: 100%;
    text-align: left;
    background: linear-gradient(135deg, #fff7d6 0%, #ffe8a3 100%);
    border: none;
    padding: 12px 16px;
    border-left: 4px solid #ffb400;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    color: #5a4a00;
    cursor: pointer;
    box-shadow: 0 2px 6px rgba(0,0,0,0.08);
    transition: background 0.2s;
}

.collapsible-toggle:hover {
    background: linear-gradient(135deg, #ffefb3 0%, #ffdd7a 100%);
}

.collapsible-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s ease;
    background: #fffbe6;
    padding: 0 16px;
    border-left: 4px solid #ffb400;
    border-radius: 0 0 8px 8px;
}

.collapsible-content p {
    color: #5a4a00;
    margin: 12px 0;
    line-height: 1.6;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.55);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 200;
}

.modal-window {
    background: white;
    width: 90%;
    max-width: 420px;
    padding: 25px;
    border-radius: 12px;
    box-shadow: 0 6px 24px rgba(0,0,0,0.25);
    animation: fadeIn 0.25s ease-out;
}

@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
}

.modal-window h3 {
    margin: 0 0 10px 0;
    color: #667eea;
    font-size: 22px;
}

.modal-window p {
    color: #444;
    margin-bottom: 20px;
    line-height: 1.5;
}

.modal-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
}

.modal-btn {
    padding: 10px 20px;
    border-radius: 6px;
    font-size: 15px;
    cursor: pointer;
    font-weight: 600;
    transition: transform 0.2s, box-shadow 0.2s;
    border: none;
}

.modal-btn.confirm {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

.modal-btn.cancel {
    background: #ddd;
    color: #333;
}

.modal-btn:hover {
    transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 600px) {
    .container {
        padding: 20px;
    }
    
    h1 {
        font-size: 24px;
    }
    
    .color-options {
        grid-template-columns: 1fr;
    }
    
    .color-picker-container {
        flex-direction: column;
        align-items: stretch;
    }
    
    .color-picker-container button {
        margin-right: 0;
        margin-bottom: 8px;
    }
    
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    table {
        font-size: 14px;
    }
    
    th, td {
        padding: 8px;
    }
    
    .squads-grid {
        grid-template-columns: 1fr;
    }
}
