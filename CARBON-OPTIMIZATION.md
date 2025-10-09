# 🌱 Optimisations Carbone Effectuées

Ce document liste toutes les optimisations effectuées pour réduire l'empreinte carbone du site web.

## ✅ Optimisations Implémentées

### 1. **JavaScript & Code Splitting** ⭐⭐⭐ (Impact Élevé)
- ✅ Lazy loading de toutes les pages via React.lazy()
- ✅ Code splitting automatique par route
- ✅ Suspense avec fallback léger pour éviter le chargement inutile
- **Impact estimé**: Réduction de ~40-60% du bundle JavaScript initial

### 2. **Polices** ⭐⭐ (Impact Moyen)
- ✅ Utilisation de polices système (sans téléchargement externe)
- ✅ Suppression des preconnect Google Fonts inutilisés
- ✅ Fallback natif: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, etc.
- **Impact estimé**: Économie de ~50-100KB et 1-2 requêtes réseau

### 3. **CSS & Animations** ⭐ (Impact Faible)
- ✅ Optimisation des transitions CSS avec will-change
- ✅ Utilisation de content-visibility: auto sur les images
- ✅ Animations légères et performantes uniquement
- **Impact estimé**: Amélioration des performances de rendu de ~10-15%

### 4. **DNS & Réseau** ⭐ (Impact Faible)
- ✅ Réduction des preconnect inutiles
- ✅ dns-prefetch pour les ressources externes critiques uniquement
- **Impact estimé**: Réduction de la latence initiale

### 5. **Badge Carbone** 🌿
- ✅ Ajout du Website Carbon Badge pour suivre l'empreinte en temps réel
- ✅ Chargement différé (defer) du script du badge

## 📊 Résultats Attendus

- **Réduction du poids initial**: ~30-40%
- **Temps de chargement**: -20-30%
- **Requêtes réseau**: -2 à -3 requêtes
- **Émissions CO2**: Réduction estimée de 25-35%

## 🔄 Optimisations Futures Recommandées

### Images (Non implémenté - Impact Élevé ⭐⭐⭐)
Pour optimiser davantage, vous pourriez:
1. Convertir toutes les images JPG/PNG en WebP (réduction ~50%)
2. Compresser les images existantes
3. Ajouter loading="lazy" sur toutes les balises `<img>`
4. Utiliser des images responsive avec srcset
5. Supprimer les images non utilisées

**Comment faire**:
```bash
# Installer un outil de conversion WebP
npm install sharp

# Convertir les images (script à créer)
# Ou utiliser un service en ligne comme Squoosh
```

### Tracking & Scripts Externes
- Évaluer la nécessité de Google Tag Manager
- Utiliser des alternatives plus légères si possible

### Cache & CDN
- Configurer un CDN pour les assets statiques
- Optimiser les headers de cache HTTP

## 📈 Suivi des Performances

Utilisez ces outils pour mesurer l'impact:
- [Website Carbon Calculator](https://www.websitecarbon.com/)
- [GTmetrix](https://gtmetrix.com/)
- [PageSpeed Insights](https://pagespeed.web.dev/)
- Badge carbone intégré au footer du site

## ♻️ Bonnes Pratiques Maintenues

- ✅ Design system avec tokens CSS réutilisables
- ✅ Tailwind CSS avec purge automatique du CSS inutilisé
- ✅ React optimisé avec Vite (build ultra-rapide)
- ✅ Composants réutilisables et modulaires
