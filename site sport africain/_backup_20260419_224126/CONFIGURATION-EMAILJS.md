# Configuration EmailJS pour Sport Africain

## Étapes de configuration

### 1. Créer un compte EmailJS
1. Allez sur [https://www.emailjs.com/](https://www.emailjs.com/)
2. Créez un compte gratuit
3. Vérifiez votre email

### 2. Configurer le service email
1. Dans le dashboard EmailJS, allez dans "Email Services"
2. Cliquez sur "Add New Service"
3. Choisissez votre fournisseur d'email (Gmail, Outlook, etc.)
4. Suivez les instructions pour connecter votre compte
5. Notez le **Service ID** (par exemple: `service_sport_africain`)

### 3. Créer un template d'email
1. Allez dans "Email Templates"
2. Cliquez sur "Create New Template"
3. Utilisez ce template:

```
Sujet: Nouveau message de {{from_name}}

De: {{from_name}}
Email: {{from_email}}

Message:
{{message}}
```

4. Notez le **Template ID** (par exemple: `template_xxxxxxx`)

### 4. Obtenir votre clé publique
1. Allez dans "Account" > "General"
2. Copiez votre **Public Key**

### 5. Mettre à jour contact.html
Ouvrez `contact.html` et remplacez:
- `YOUR_PUBLIC_KEY` par votre clé publique
- `YOUR_TEMPLATE_ID` par votre template ID

```javascript
emailjs.init("VOTRE_CLE_PUBLIQUE_ICI");

emailjs.sendForm('service_sport_africain', 'VOTRE_TEMPLATE_ID_ICI', this)
```

## Test du formulaire
1. Ouvrez `contact.html` dans votre navigateur
2. Remplissez le formulaire
3. Cliquez sur "Envoyer"
4. Vérifiez votre boîte email

## Fonctionnalités implémentées
✅ Envoi d'email via EmailJS
✅ État de chargement pendant l'envoi
✅ Message de succès/erreur
✅ Reset automatique du formulaire après envoi
✅ Validation des champs
✅ Design moderne et responsive

## Limites du plan gratuit
- 200 emails/mois
- Parfait pour un site de démonstration ou petit trafic
