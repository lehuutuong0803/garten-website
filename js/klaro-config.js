// =============================================================
// Klaro Cookie Consent Configuration
// Garten & Hausmeisterservice Denyś Ropitskyi
// =============================================================

var klaroConfig = {
    // Where Klaro stores the user's consent decision
    storageMethod: 'localStorage',
    storageName: 'klaro-consent',

    // Show the consent notice on page load
    mustConsent: false,       // false = soft banner at bottom, not a hard modal
    acceptAll: true,          // show "Accept all" button
    hideDeclineAll: false,    // show "Decline all" button too

    // Do NOT load services before consent is given
    default: false,

    // Language
    lang: 'de',

    // Link to your Datenschutzerklärung inside the banner
    privacyPolicy: 'datenschutz.html',

    // -------------------------------------------------------
    // Services (third-party tools that set cookies or
    // transmit data). Add new entries here whenever you
    // integrate a new tool in the future.
    // -------------------------------------------------------
    services: [
        {
            // --------------------------------------------------
            // Google Maps — only activates on consent
            // The data-name="google-maps" attribute on the
            // map container in contact.html controls this.
            // --------------------------------------------------
            name: 'google-maps',
            title: 'Google Maps',
            purposes: ['functional'],
            required: false,
            default: false,
            description: 'Wir verwenden Google Maps, um Ihnen unseren Standort und unser Einsatzgebiet anzuzeigen. Dabei werden Daten (inkl. IP-Adresse) an Google übertragen.',
            cookies: [],
            onAccept: `
                // Load the map when the user accepts
                if (typeof loadGoogleMap === 'function') {
                    loadGoogleMap();
                }
            `,
            onDecline: `
                // Show the placeholder again if user later withdraws consent
                const placeholder = document.getElementById('map-placeholder');
                const container   = document.getElementById('map-container');
                if (placeholder && container) {
                    container.innerHTML = '';
                    container.appendChild(placeholder);
                    placeholder.style.display = '';
                }
            `,
        },
        // --------------------------------------------------
        // Technically necessary cookies (Bootstrap, session)
        // Marked required=true so they are always on and
        // clearly disclosed — no toggle shown to the user.
        // --------------------------------------------------
        {
            name: 'session',
            title: 'Technisch notwendige Cookies',
            purposes: ['necessary'],
            required: true,
            default: true,
            description: 'Diese Cookies sind für den grundlegenden Betrieb der Website erforderlich (z. B. Seitenlade-Animation, Formularzustand). Sie speichern keine personenbezogenen Daten.',
        },
    ],

    // -------------------------------------------------------
    // UI text (German)
    // -------------------------------------------------------
    translations: {
        de: {
            consentNotice: {
                title: 'Cookie-Hinweis',
                description: 'Wir verwenden technisch notwendige Cookies für den Betrieb dieser Website. Mit Ihrer Einwilligung binden wir außerdem Google Maps ein. Weitere Informationen finden Sie in unserer {privacyPolicy}.',
                privacyPolicy: {
                    name: 'Datenschutzerklärung',
                    text: '{privacyPolicy}',
                },
                learnMore: 'Einstellungen',
            },
            consentModal: {
                title: 'Datenschutzeinstellungen',
                description: 'Hier können Sie einsehen und anpassen, welche Informationen wir über Sie sammeln. Einträge, die grau markiert sind, sind immer aktiv und können nicht deaktiviert werden.',
                privacyPolicy: {
                    name: 'Datenschutzerklärung',
                    text: 'Weitere Informationen finden Sie in unserer {privacyPolicy}.',
                },
            },
            acceptAll: 'Alle akzeptieren',
            declineAll: 'Alle ablehnen',
            acceptSelected: 'Auswahl bestätigen',
            close: 'Schließen',
            save: 'Einstellungen speichern',
            purposes: {
                necessary: 'Technisch notwendig',
                functional: 'Funktional',
            },
            service: {
                disableAll: {
                    title: 'Alle Dienste aktivieren/deaktivieren',
                    description: 'Alle optionalen Dienste aktivieren oder deaktivieren.',
                },
                optOut: {
                    title: '(Opt-out)',
                    description: 'Dieser Dienst wird standardmäßig geladen. Sie können ihn deaktivieren.',
                },
                required: {
                    title: '(Immer aktiv)',
                    description: 'Dieser Dienst ist für die Funktion der Website erforderlich.',
                },
                'google-maps': {
                    description: 'Wir verwenden Google Maps, um Ihnen unseren Standort anzuzeigen. Dabei werden Daten (inkl. IP-Adresse) an Google-Server übertragen.',
                },
                session: {
                    description: 'Technisch notwendige Cookies für Grundfunktionen der Website.',
                },
            },
        },
    },
};
