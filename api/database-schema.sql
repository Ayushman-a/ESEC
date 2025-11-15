-- Database Schema for ESEC Website Forms
-- Run this SQL to create the necessary tables in your database

-- Table for Contact/Demo/Sales Requests
CREATE TABLE IF NOT EXISTS contact_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    request_type VARCHAR(50) NOT NULL,
    company_name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255) NOT NULL,
    department VARCHAR(255) NOT NULL,
    designation VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    website VARCHAR(255),
    key_software TEXT NOT NULL,
    total_software VARCHAR(50) NOT NULL,
    total_users VARCHAR(50) NOT NULL,
    demo_dates_or_message TEXT NOT NULL,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_created_at (created_at),
    INDEX idx_request_type (request_type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table for Partner Requests
CREATE TABLE IF NOT EXISTS partner_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    contact_person VARCHAR(255) NOT NULL,
    designation VARCHAR(255) NOT NULL,
    partnership_type VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    website VARCHAR(255),
    industries TEXT,
    current_products TEXT,
    total_customers VARCHAR(50),
    industries_operating VARCHAR(255),
    employees VARCHAR(100),
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_created_at (created_at),
    INDEX idx_partnership_type (partnership_type)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Table for Pricing Proposal Requests
CREATE TABLE IF NOT EXISTS pricing_proposals (
    id INT AUTO_INCREMENT PRIMARY KEY,
    company_name VARCHAR(255) NOT NULL,
    is_msme VARCHAR(10) NOT NULL,
    udyam_number VARCHAR(100),
    msme_proof TEXT,
    contact_person VARCHAR(255) NOT NULL,
    department VARCHAR(255),
    designation VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50) NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    website VARCHAR(255),
    key_software TEXT,
    total_software VARCHAR(50),
    total_users VARCHAR(50),
    timeline TEXT,
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_created_at (created_at),
    INDEX idx_is_msme (is_msme)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
