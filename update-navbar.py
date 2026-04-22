#!/usr/bin/env python3
"""
Script to add hamburger menu to all HTML files
"""
import os
import re

def get_navbar_replacement():
    """Return the new navbar HTML with hamburger menu"""
    return """    <nav class="navbar">
        <div class="navbar-container">
            <div class="navbar-logo">
                <a href="index.html">
                    <img src="images/version logo sport africain_logo original.png" alt="Sport Africain">
                </a>
            </div>
            
            <div class="navbar-menu">
                <a href="index.html" class="navbar-link">Accueil</a>
                
                <div class="dropdown">
                    <button class="dropbtn" onclick="toggleMenu('actualites-menu')">Actualités ▼</button>
                    <div id="actualites-menu" class="dropdown-content">
                        <a href="actualites.html">Toutes les actualités</a>
                        <a href="actualites-football.html">Football</a>
                        <a href="actualites-basketball.html">Basketball</a>
                        <a href="actualites-athletisme.html">Athlétisme</a>
                        <a href="actualites-lutte.html">Lutte</a>
                    </div>
                </div>
                
                <a href="podcast.html" class="navbar-link">Podcasts</a>
                <a href="interview.html" class="navbar-link">Interviews</a>
                <a href="about.html" class="navbar-link">À propos</a>
            </div>
            
            <div class="navbar-actions">
                <a href="contact.html" class="navbar-link">Contact</a>
                <a href="abonnement.html" class="btn btn-subscribe">S'abonner</a>
            </div>
            
            <!-- Hamburger Menu Button -->
            <button class="hamburger-menu" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    </nav>

    <!-- Mobile Menu -->
    <div class="mobile-menu" id="mobileMenu">
        <a href="index.html" class="mobile-menu-link">Accueil</a>
        
        <div class="dropdown-mobile">
            <button class="dropdown-btn-mobile">
                Actualités <span class="arrow">▼</span>
            </button>
            <div class="dropdown-content-mobile">
                <a href="actualites.html">Toutes les actualités</a>
                <a href="actualites-football.html">Football</a>
                <a href="actualites-basketball.html">Basketball</a>
                <a href="actualites-athletisme.html">Athlétisme</a>
                <a href="actualites-lutte.html">Lutte</a>
            </div>
        </div>
        
        <a href="podcast.html" class="mobile-menu-link">Podcasts</a>
        <a href="interview.html" class="mobile-menu-link">Interviews</a>
        <a href="about.html" class="mobile-menu-link">À propos</a>
        <a href="contact.html" class="mobile-menu-link">Contact</a>
        
        <div class="mobile-menu-actions">
            <a href="abonnement.html" class="btn btn-subscribe">S'abonner</a>
        </div>
    </div>"""

def find_navbar_end(content):
    """Find the end of navbar section"""
    match = re.search(r'</nav>\s*', content)
    if match:
        return match.end()
    return None

def update_html_file(filepath):
    """Update a single HTML file with hamburger menu"""
    if os.path.basename(filepath) == 'index.html':
        return False  # Skip index.html as it's already updated
    
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Check if already has hamburger menu
    if 'hamburger-menu' in content:
        return False
    
    # Check if it has navbar-container
    if 'navbar-container' not in content:
        return False
    
    # Find the start of navbar
    navbar_start = content.find('<nav class="navbar">')
    if navbar_start == -1:
        return False
    
    # Find the end of navbar
    navbar_end = content.find('</nav>', navbar_start)
    if navbar_end == -1:
        return False
    
    navbar_end += len('</nav>')
    
    # Get the new navbar
    new_navbar = get_navbar_replacement()
    
    # Check if file ends with hamburger-menu.js script
    has_hamburger_script = 'hamburger-menu.js' in content
    
    # Replace the navbar
    new_content = content[:navbar_start] + new_navbar + content[navbar_end:]
    
    # Add hamburger script if not present
    if not has_hamburger_script:
        # Find animations.js to add hamburger-menu.js after it
        insert_pos = new_content.find('<!-- Chatbot -->')
        if insert_pos != -1:
            script_tag = '\n    <!-- Hamburger Menu -->\n    <script src="hamburger-menu.js"></script>\n    '
            new_content = new_content[:insert_pos] + script_tag + new_content[insert_pos:]
    
    # Write the updated content
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(new_content)
    
    return True

# Main
if __name__ == '__main__':
    base_dir = "/home/mouhamadou-lamine/Musique/site sport africain (2)/site sport africain"
    updated_count = 0
    
    for filename in sorted(os.listdir(base_dir)):
        if filename.endswith('.html'):
            filepath = os.path.join(base_dir, filename)
            if update_html_file(filepath):
                print(f'✓ Updated: {filename}')
                updated_count += 1
            else:
                print(f'- Skipped: {filename}')
    
    print(f'\nTotal files updated: {updated_count}')
