/**
 * datas.js
 * This file describes the list of questions in json format.
 * The 'questions' object will then be loaded in main.js.
 *
 * @license CC0 1.0 Universal, https://creativecommons.org/publicdomain/zero/1.0/
 * @version 0.1
 * @author  Jérôme Braëms, https://github.com/jeromeBRM
 * @updated 16-06-2023
 *
 */

const questions = [
  {
    "title" : "Un audit en aveugle est un audit ?",
    "choices" : [
      {
        "title" : "Fait sans aucune connaissance du SI",
        "correct" : true
      },
      {
        "title" : "Fait sans connaître les mots de passe",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Fait depuis une salle sans fenêtre",
        "correct" : false
      },
	  {
        "title" : "Fait par une personne malvoyante",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L’intégrité c’est le fait de ne pas … une donnée ?",
    "choices" : [
      {
        "title" : "Altérer",
        "correct" : true
      },
      {
        "title" : "Transférer",
        "correct" : false
      },
	  {
        "title" : "Voler",
        "correct" : false
      },
	  {
        "title" : "Intercepter",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, lors de la compromission d'un serveur Web, les risques peuvent être ?",
    "choices" : [
      {
        "title" : "Compromission du réseau",
        "correct" : true
      },
      {
        "title" : "Fuites d'informations",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Pertes financières",
        "correct" : false
      },
	  {
        "title" : "Déni de service",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Kerberos est un protocole de ?",
    "choices" : [
      {
        "title" : "Authentification",
        "correct" : true
      },
      {
        "title" : "Sécurisation",
        "correct" : false
      },
	  {
        "title" : "Chiffrement",
        "correct" : false
      },
	  {
        "title" : "Biométrie",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L'absence de journalisation des accès est une menace sur ?",
    "choices" : [
      {
        "title" : "La preuve",
        "correct" : true
      },
      {
        "title" : "L'intégrité",
        "correct" : false
      },
	  {
        "title" : "La confidentialité",
        "correct" : false
      },
	  {
        "title" : "La disponibilité",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le risque d'espionnage est plus élevé dans un ?",
    "choices" : [
      {
        "title" : "Réseau sans-fil que dans un réseau filaire",
        "correct" : true
      },
      {
        "title" : "Réseau filaire que dans un réseau sans-fil",
        "correct" : false
      },
	  {
        "title" : "Il n'y a pas de différence",
        "correct" : false
      },
	  {
        "title" : "Cela dépend des équipements réseaux",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Pour détecter une intrusion dans un réseau sans-fil, on peut mettre en place un ?",
    "choices" : [
      {
        "title" : "WIDS",
        "correct" : true
      },
      {
        "title" : "VRDS",
        "correct" : false
      },
	  {
        "title" : "HIPS",
        "correct" : false
      },
	  {
        "title" : "PIDS",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Dans un réseau Wi-Fi le chiffrement est effectué au niveau ?",
    "choices" : [
      {
        "title" : "Radio",
        "correct" : true
      },
      {
        "title" : "Electrique",
        "correct" : false
      },
	  {
        "title" : "Filière",
        "correct" : false
      },
	  {
        "title" : "Filaire",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Une usurpation d'identité est une menace sur ?",
    "choices" : [
      {
        "title" : "La preuve",
        "correct" : true
      },
      {
        "title" : "La confidentialité",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "La disponibilité",
        "correct" : false
      },
	  {
        "title" : "L'intégrité",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La protection antivirale doit être positionnée aux niveaux ?",
    "choices" : [
      {
        "title" : "Messagerie/serveurs de fichiers/accès internet/poste de travail",
        "correct" : true
      },
      {
        "title" : "Firewall/serveurs de fichiers/accès internet/poste de travail",
        "correct" : false
      },
	  {
        "title" : "Messagerie/serveurs de fichiers/réseaux/poste de travail",
        "correct" : false
      },
	  {
        "title" : "Firewall/serveurs de fichiers/réseaux/poste de travail",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Pourquoi les flux sortants peuvent être dangereux ?",
    "choices" : [
      {
        "title" : "Facilite la fuite d'informations",
        "correct" : true
      },
      {
        "title" : "Les 3",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Permet de contourner les mesures de sécurité",
        "correct" : false
      },
	  {
        "title" : "Pose un problème d'intégrité des données",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Une adresse IP privée n'est pas ?",
    "choices" : [
      {
        "title" : "Routable sur l'Internet",
        "correct" : true
      },
      {
        "title" : "Filtrable",
        "correct" : false
      },
	  {
        "title" : "Sécurisable",
        "correct" : false
      },
	  {
        "title" : "Autorisée à communiquer",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La LCEN oblige les hébergeurs à conserver les logs de connexion pendant ?",
    "choices" : [
      {
        "title" : "1 an",
        "correct" : true
      },
      {
        "title" : "3 mois",
        "correct" : false
      },
	  {
        "title" : "3 ans",
        "correct" : false
      },
	  {
        "title" : "1 mois",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, une application Web doit garantir ?",
    "choices" : [
      {
        "title" : "Les sauvegardes",
        "correct" : true
      },
      {
        "title" : "La confidentialité",
        "correct" : false
      },
	  {
        "title" : "Les habilitations",
        "correct" : false
      },
	  {
        "title" : "L'authentification",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un DHCP permet d'intervenir au niveau de la ?",
    "choices" : [
      {
        "title" : "Preuve",
        "correct" : true
      },
      {
        "title" : "Intégrité",
        "correct" : false
      },
	  {
        "title" : "Disponibilité",
        "correct" : false
      },
	  {
        "title" : "Confidentialité",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L'un des principes du forensique est de ?",
    "choices" : [
      {
        "title" : "Conserver l'intégrité de la preuve",
        "correct" : true
      },
      {
        "title" : "Des traces éphémères",
        "correct" : false
      },
	  {
        "title" : "Eviter des problèmes de disponibilité",
        "correct" : false
      },
	  {
        "title" : "Lutter contre la fuite de données",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Pour éviter la propagation d'un virus, il faut ?",
    "choices" : [
      {
        "title" : "Cloisonner le réseau",
        "correct" : true
      },
      {
        "title" : "Déconnecter le réseau d'Internet",
        "correct" : false
      },
	  {
        "title" : "Chiffrer le réseau",
        "correct" : false
      },
	  {
        "title" : "Utiliser un antivirus",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La notion de preuve est importante car elle permet de  remonter jusqu’à … d’un événement ?",
    "choices" : [
      {
        "title" : "L’origine",
        "correct" : true
      },
      {
        "title" : "La date",
        "correct" : false
      },
	  {
        "title" : "Le transfert",
        "correct" : false
      },
	  {
        "title" : "La durée",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est le problème principal des ondes radios ?",
    "choices" : [
      {
        "title" : "La zone de propagation est difficilement maîtrisable",
        "correct" : true
      },
      {
        "title" : "Le roaming n'est pas possible",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Les communications ne peuvent pas être chiffrées",
        "correct" : false
      },
	  {
        "title" : "Elles n'ont font qu'à leur tête",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un pare-feu personnel est un pare-feu pour ?",
    "choices" : [
      {
        "title" : "Poste de travail",
        "correct" : true
      },
      {
        "title" : "Infrastructure",
        "correct" : false
      },
	  {
        "title" : "Egoïste",
        "correct" : false
      },
	  {
        "title" : "Antivirus",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le principe d'échange de Locard stipule que lorsque deux objets entrent en contact, il se produit ?",
    "choices" : [
      {
        "title" : "un échange ou un transfert de matière entre eux",
        "correct" : true
      },
      {
        "title" : "Un trou dans le continuum espace-temps",
        "correct" : false
      },
	  {
        "title" : "Une fusion de matière entre eux",
        "correct" : false
      },
	  {
        "title" : "Un éparpillement de matière",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un « Single Point Of Failure » est un point d’un système informatique qui peut entrainer ?",
    "choices" : [
      {
        "title" : "L’arrêt de l’ensemble du système",
        "correct" : true
      },
      {
        "title" : "La sécurisation de l’ensemble du système",
        "correct" : false
      },
	  {
        "title" : "L'indépendance de l’ensemble du système",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Le chiffrement de l’ensemble du système",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La défense en profondeur est une approche de la sécurité par ?",
    "choices" : [
      {
        "title" : "Couches",
        "correct" : true
      },
      {
        "title" : "Contextes",
        "correct" : false
      },
	  {
        "title" : "Le petit bout de la lorgnette",
        "correct" : false
      },
	  {
        "title" : "Filtres",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L'intérêt du network forensique est de pouvoir analyser ?",
    "choices" : [
      {
        "title" : "Des traces éphémères",
        "correct" : true
      },
      {
        "title" : "Des traces sur les servers",
        "correct" : false
      },
	  {
        "title" : "Des traces redondantes",
        "correct" : false
      },
	  {
        "title" : "Des traces résiduelles",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Trouver l’intrus, une bonne politique de sauvegarde permet de se prémunir contre … de données ?",
    "choices" : [
      {
        "title" : "Les pertes",
        "correct" : true
      },
      {
        "title" : "Les attaques",
        "correct" : false
      },
	  {
        "title" : "Le vol",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Les erreurs de saisie",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L'utilisation d'identifiants génériques est une menace sur ?",
    "choices" : [
      {
        "title" : "La preuve",
        "correct" : true
      },
      {
        "title" : "L'intégrité",
        "correct" : false
      },
	  {
        "title" : "La disponibilité",
        "correct" : false
      },
	  {
        "title" : "La confidentialité",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Sur un site WEB, le contrôle des données saisies par un utilisateur est important car cela peut éviter ?",
    "choices" : [
      {
        "title" : "Un problème d'injection",
        "correct" : true
      },
      {
        "title" : "Un problème de virus",
        "correct" : false
      },
	  {
        "title" : "Un problème d'infiltration",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Un problème de carburateur",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Les applications WEB ayant une IP publique sont très exposées aux attaques car ?",
    "choices" : [
      {
        "title" : "Elles sont accessibles par tous",
        "correct" : true
      },
      {
        "title" : "Elles sont rarement mises à jour",
        "correct" : false
      },
	  {
        "title" : "Elles sont mal développées",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Le petit cadenas est vraiment trop petit",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, les technologies suivantes sont sans-fil ?",
    "choices" : [
      {
        "title" : "MITM",
        "correct" : true
      },
      {
        "title" : "Wimax",
        "correct" : false
      },
	  {
        "title" : "NFC",
        "correct" : false
      },
	  {
        "title" : "Bluetooth",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "193.350.230.230 est une adresse ?",
    "choices" : [
      {
        "title" : "Non valide",
        "correct" : true
      },
      {
        "title" : "Valide",
        "correct" : false
      },
	  {
        "title" : "De Google",
        "correct" : false
      },
	  {
        "title" : "De l'UTT",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, un plan d'action doit comporter les informations suivantes ?",
    "choices" : [
      {
        "title" : "Obligations légales",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Description des vulnérabilités",
        "correct" : false
      },
	  {
        "title" : "Planning",
        "correct" : false
      },
	  {
        "title" : "Criticité des vulnérabilités",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Au niveau de l'analyse forensique, la norme est en vigueur est ?",
    "choices" : [
      {
        "title" : "ISO 27037",
        "correct" : true
      },
      {
        "title" : "ISA 27037",
        "correct" : false
      },
	  {
        "title" : "ISO 37037",
        "correct" : false
      },
	  {
        "title" : "ISA 37037",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le reconditionnement des postes permet de lutter contre la perte de … des données ?",
    "choices" : [
      {
        "title" : "Confidentialité",
        "correct" : true
      },
      {
        "title" : "Intégrité",
        "correct" : false
      },
	  {
        "title" : "Disponibilité",
        "correct" : false
      },
	  {
        "title" : "Preuve",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L'écoute d'un réseau est une menace sur ?",
    "choices" : [
      {
        "title" : "La confidentialité",
        "correct" : true
      },
      {
        "title" : "La disponibilité",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "La preuve",
        "correct" : false
      },
	  {
        "title" : "L'intégrité",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La mise en place d'un DLP répond à une problématique de sécurité précise ?",
    "choices" : [
      {
        "title" : "Lutte contre la fuite d'informations",
        "correct" : true
      },
      {
        "title" : "Lutte contre la diffamation",
        "correct" : false
      },
	  {
        "title" : "Lutte contre les virus",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Lutte contre les intrusions",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Une attaque c’est l’exploitation ?",
    "choices" : [
      {
        "title" : "D’une vulnérabilité",
        "correct" : true
      },
      {
        "title" : "D’un risque",
        "correct" : false
      },
	  {
        "title" : "D’une contre-mesure",
        "correct" : false
      },
	  {
        "title" : "D’une menace",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, dans quel cas, le chiffrement est utilisé ?",
    "choices" : [
      {
        "title" : "VLAN",
        "correct" : true
      },
      {
        "title" : "VPN",
        "correct" : false
      },
	  {
        "title" : "E-commerce",
        "correct" : false
      },
	  {
        "title" : "Signature électronique",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le protocole DHCP permet d'affecter une adresse ... à un ordinateur ?",
    "choices" : [
      {
        "title" : "IP",
        "correct" : true
      },
      {
        "title" : "DNS",
        "correct" : false
      },
	  {
        "title" : "MAC",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "ARP",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Pourquoi le protocole FTP n'est pas sécurisé ?",
    "choices" : [
      {
        "title" : "Les données ne sont pas chiffrées",
        "correct" : true
      },
      {
        "title" : "Il est trop vieux",
        "correct" : false
      },
	  {
        "title" : "Il est sensible aux ondes radios",
        "correct" : false
      },
	  {
        "title" : "Il perd des données",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Que signifie PSSI ?",
    "choices" : [
      {
        "title" : "Politique de Sécurité des Systèmes d’Information",
        "correct" : true
      },
      {
        "title" : "Pratiques de Sécurité des Systèmes d’Information",
        "correct" : false
      },
	  {
        "title" : "Politique de Sécurité des Systèmes Industriels",
        "correct" : false
      },
	  {
        "title" : "Pratiques de Sécurité des Systèmes Industriels",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Les principaux vecteurs d'attaques au niveau des applications Web sont ?",
    "choices" : [
      {
        "title" : "Applications et navigateurs",
        "correct" : true
      },
      {
        "title" : "Applications et réseaux",
        "correct" : false
      },
	  {
        "title" : "OS et réseaux",
        "correct" : false
      },
	  {
        "title" : "OS et navigateurs",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Une erreur d'habilitation est une menace sur ?",
    "choices" : [
      {
        "title" : "La confidentialité et l'intégrité",
        "correct" : true
      },
      {
        "title" : "L'intégrité et la disponibilité",
        "correct" : false
      },
	  {
        "title" : "La disponibilité et la preuve",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "La preuve et l'intégrité",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L’authentification forte est le fait d’utiliser … facteurs d’authentification ?",
    "choices" : [
      {
        "title" : "2/3",
        "correct" : true
      },
      {
        "title" : "1/2",
        "correct" : false
      },
	  {
        "title" : "3/4",
        "correct" : false
      },
	  {
        "title" : "4/5",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, les 3 concepts utilisés en cryptographie ?",
    "choices" : [
      {
        "title" : "Chiffrement disymétrique",
        "correct" : true
      },
      {
        "title" : "Chiffrement asymétrique",
        "correct" : false
      },
	  {
        "title" : "Chiffrement symétrique",
        "correct" : false
      },
	  {
        "title" : "Fonction de hachage",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le NAT permet de ?",
    "choices" : [
      {
        "title" : "Masquer les IP locales",
        "correct" : true
      },
      {
        "title" : "Générer les IP publiques",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Masquer les IP publiques",
        "correct" : false
      },
	  {
        "title" : "Générer les IP locales",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, pourquoi un firewall (pare-feu) d'infrastructure classique n'est pas suffisant ?",
    "choices" : [
      {
        "title" : "Sa fonction principale est de filtrer",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Sa fonction principale est de lutter contre les attaques",
        "correct" : false
      },
	  {
        "title" : "Sa fonction principale est de lutter contre les virus",
        "correct" : false
      },
	  {
        "title" : "Sa fonction principale est de chiffrer",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un ransomware est un malware qui ... les données du disque dur ?",
    "choices" : [
      {
        "title" : "Chiffre",
        "correct" : true
      },
      {
        "title" : "Supprime",
        "correct" : false
      },
	  {
        "title" : "Exfiltre",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Copie",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "GPO signifie ?",
    "choices" : [
      {
        "title" : "Group Policy Object",
        "correct" : true
      },
      {
        "title" : "Group Policy Organization",
        "correct" : false
      },
	  {
        "title" : "General Policy Object",
        "correct" : false
      },
	  {
        "title" : "General Policy Organization",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "AES est un algorithme de ?",
    "choices" : [
      {
        "title" : "Chiffrement",
        "correct" : true
      },
      {
        "title" : "Authentification",
        "correct" : false
      },
	  {
        "title" : "Communication",
        "correct" : false
      },
	  {
        "title" : "Hachage",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L'utilisation d'un commutateur (switch) à la place d'un concentrateur (hub) permet de lutter (dans une certaine mesure) contre ?",
    "choices" : [
      {
        "title" : "L'écoute du réseau",
        "correct" : true
      },
      {
        "title" : "La saturation du réseau",
        "correct" : false
      },
	  {
        "title" : "La perte de disponibilité du réseau",
        "correct" : false
      },
	  {
        "title" : "La perte de données sur le réseau",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Une erreur de saisie est une menace sur ?",
    "choices" : [
      {
        "title" : "L'intégrité",
        "correct" : true
      },
      {
        "title" : "La confidentialité",
        "correct" : false
      },
	  {
        "title" : "La preuve",
        "correct" : false
      },
	  {
        "title" : "La disponibilité",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La confidentialité permet de garantir qu'une information ?",
    "choices" : [
      {
        "title" : "N'est accessible qu'aux personnes autorisées",
        "correct" : true
      },
      {
        "title" : "Est toujours accessible",
        "correct" : false
      },
	  {
        "title" : "Ne peux pas être modifiée",
        "correct" : false
      },
	  {
        "title" : "Ne peux pas être volées",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La technique des VLANS permet de ?",
    "choices" : [
      {
        "title" : "Segmenter le réseau",
        "correct" : true
      },
      {
        "title" : "Manager les routeurs",
        "correct" : false
      },
	  {
        "title" : "Lutter contre le DDOS",
        "correct" : false
      },
	  {
        "title" : "S’authentifier sur le réseau",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La bonne politique pour sécuriser un poste de travail est ?",
    "choices" : [
      {
        "title" : "Le moindre privilège",
        "correct" : true
      },
      {
        "title" : "Les GPOs",
        "correct" : false
      },
	  {
        "title" : "Ne pas en avoir",
        "correct" : false
      },
	  {
        "title" : "La sensibilisation",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L’attaque Man In The Middle (MITM), c’est le fait … des données ?",
    "choices" : [
      {
        "title" : "D’intercepter",
        "correct" : true
      },
      {
        "title" : "De voler",
        "correct" : false
      },
	  {
        "title" : "D’altérer",
        "correct" : false
      },
	  {
        "title" : "De transférer",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L'objectif d'une PKI est de ?",
    "choices" : [
      {
        "title" : "Gérer des certificats",
        "correct" : true
      },
      {
        "title" : "Gérer la signature électronique",
        "correct" : false
      },
	  {
        "title" : "Gérer des clés secrètes",
        "correct" : false
      },
	  {
        "title" : "Gérer les sauvegardes",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "LCEN veut dire ?",
    "choices" : [
      {
        "title" : "Loi pour la Confiance dans l'Economie Numérique",
        "correct" : true
      },
      {
        "title" : "Loi pour la Cryptographie dans l'Economie Numérique",
        "correct" : false
      },
	  {
        "title" : "Loi pour la Cryptographie dans l'Economie Nomade",
        "correct" : false
      },
	  {
        "title" : "Loi pour la Confiance dans l'Economie Nomade",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un VPN SSL est un VPN utilisant le même type de technologie que ?",
    "choices" : [
      {
        "title" : "HTTPS",
        "correct" : true
      },
      {
        "title" : "SMTP",
        "correct" : false
      },
	  {
        "title" : "IPSEC",
        "correct" : false
      },
	  {
        "title" : "AES",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Qu’est une adresse MAC ?",
    "choices" : [
      {
        "title" : "L’identifiant physique d’une carte réseau",
        "correct" : true
      },
      {
        "title" : "L’identifiant d’un périphérique connecté à Internet",
        "correct" : false
      },
	  {
        "title" : "’adresse d’une personne portant exclusivement des chaussures blanches",
        "correct" : false
      },
	  {
        "title" : "L’identifiant logique d’une carte réseau",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, pourquoi faire un Audit ?",
    "choices" : [
      {
        "title" : "Identifier les différents acteurs",
        "correct" : true
      },
      {
        "title" : "Vérification si la législation est respectée",
        "correct" : false
      },
	  {
        "title" : "Vérification si la PSSI est bien appliquée",
        "correct" : false
      },
	  {
        "title" : "Identifier les vulnérabilités",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Qu'est ce qu'un cookies ?",
    "choices" : [
      {
        "title" : "Un petit fichier texte enregistré lors de la viste d'un site Web",
        "correct" : true
      },
      {
        "title" : "Un petit fichier exécutable enregistré lors de la viste d'un site Web",
        "correct" : false
      },
	  {
        "title" : "Un petit fichier texte supprimé lors de la viste d'un site Web",
        "correct" : false
      },
	  {
        "title" : "Un petit gâteau avec des pépites de chocolat",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le chiffrement du disque dur permet de lutter contre ?",
    "choices" : [
      {
        "title" : "Le vol",
        "correct" : true
      },
      {
        "title" : "Les virus",
        "correct" : false
      },
	  {
        "title" : "L’usurpation d’identité",
        "correct" : false
      },
	  {
        "title" : "Les pannes",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Propagation des virus, quel est l’intrus ?",
    "choices" : [
      {
        "title" : "Capillarité",
        "correct" : true
      },
      {
        "title" : "Réseau",
        "correct" : false
      },
	  {
        "title" : "Ram",
        "correct" : false
      },
	  {
        "title" : "Messagerie",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quelle version de TLS doit-on utiliser pour un serveur Web ?",
    "choices" : [
      {
        "title" : "1.3",
        "correct" : true
      },
      {
        "title" : "1.4",
        "correct" : false
      },
	  {
        "title" : "1.1",
        "correct" : false
      },
	  {
        "title" : "1.2",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "DICP correspond à ?",
    "choices" : [
      {
        "title" : "Disponibilité/Intégrité/Confidentialité/Preuve",
        "correct" : true
      },
      {
        "title" : "Dommages/Intégrité/Chiffrement /Preuve",
        "correct" : false
      },
	  {
        "title" : "Disponibilité/Intégrité/Chiffrement/Preuve",
        "correct" : false
      },
	  {
        "title" : "Dommages/Inégrité/Confidentialité/Preuve",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Dans un projet de DLP, au niveau des risques majeurs quel est l’intrus ?",
    "choices" : [
      {
        "title" : "Réseaux",
        "correct" : true
      },
      {
        "title" : "Stockage",
        "correct" : false
      },
	  {
        "title" : "Poste de travail",
        "correct" : false
      },
	  {
        "title" : "Serveur",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "192.168.2.3 est une adresse ?",
    "choices" : [
      {
        "title" : "Privée",
        "correct" : true
      },
      {
        "title" : "Publique",
        "correct" : false
      },
	  {
        "title" : "Publique et privée",
        "correct" : false
      },
	  {
        "title" : "Publique ou privée",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un cheval de Troie permet de ?",
    "choices" : [
      {
        "title" : "Créer une porte dérobée",
        "correct" : true
      },
      {
        "title" : "De maintenir un accès frauduleux",
        "correct" : false
      },
	  {
        "title" : "De voler des données",
        "correct" : false
      },
	  {
        "title" : "D'effacer des données",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un VPN ne protège pas contre ?",
    "choices" : [
      {
        "title" : "Les DDOS",
        "correct" : true
      },
      {
        "title" : "Les attaques de type MITM",
        "correct" : false
      },
	  {
        "title" : "La modification de flux",
        "correct" : false
      },
	  {
        "title" : "L'écoute",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L’objectif principal d’un firewall personnel permet de ?",
    "choices" : [
      {
        "title" : "Filtrer",
        "correct" : true
      },
      {
        "title" : "Les 3",
        "correct" : false
      },
	  {
        "title" : "Se rassurer",
        "correct" : false
      },
	  {
        "title" : "Protéger",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "172.20.20.0 correspond à ?",
    "choices" : [
      {
        "title" : "L'adresse d'un réseau",
        "correct" : true
      },
      {
        "title" : "L'adresse d'un serveur",
        "correct" : false
      },
	  {
        "title" : "L'adresse d'un routeur",
        "correct" : false
      },
	  {
        "title" : "L'adresse d'un poste de travail",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La loi DADVSI a pour objectif de protéger contre ?",
    "choices" : [
      {
        "title" : "Les atteintes aux droits d'auteur",
        "correct" : true
      },
      {
        "title" : "La fraude informatique",
        "correct" : false
      },
	  {
        "title" : "Le téléchargement illégal",
        "correct" : false
      },
	  {
        "title" : "La collecte des données à caractère personnel",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L'habilitation comprend 3 mécanismes ?",
    "choices" : [
      {
        "title" : "Authentification/Autorisation/Traçabilité",
        "correct" : true
      },
      {
        "title" : "Authentification/Confidentialité/Traçabilité",
        "correct" : false
      },
	  {
        "title" : "Authentification/Confidentialité/Activité",
        "correct" : false
      },
	  {
        "title" : "Authentification/Autorisation/Activité",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La mise en place d'un IDS/IPS répond à une problématique de sécurité précise ?",
    "choices" : [
      {
        "title" : "Lutte contre les intrusions",
        "correct" : true
      },
      {
        "title" : "Lutte contre la diffamation",
        "correct" : false
      },
	  {
        "title" : "Lutte contre les virus",
        "correct" : false
      },
	  {
        "title" : "Lutte contre la fuite d'informations",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L'authentification consiste à vérifier l'identité d'une entité afin d'autoriser ?",
    "choices" : [
      {
        "title" : "L'accès à des ressources",
        "correct" : true
      },
      {
        "title" : "L'accès à une salle informatique",
        "correct" : false
      },
	  {
        "title" : "Des opérations de sécurité",
        "correct" : false
      },
	  {
        "title" : "Des opérations de filtrage",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le risque d'intrusion est plus élevé dans un ?",
    "choices" : [
      {
        "title" : "Réseau sans-fil que dans un réseau filaire",
        "correct" : true
      },
      {
        "title" : "Il n'y a pas de différence",
        "correct" : false
      },
	  {
        "title" : "Réseau filaire que dans un réseau sans-fil",
        "correct" : false
      },
	  {
        "title" : "Cela dépend des équipements réseaux",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Une zone de quarantaine permet ?",
    "choices" : [
      {
        "title" : "D'isoler un poste du réseau",
        "correct" : true
      },
      {
        "title" : "De sécuriser un réseau Wi-Fi",
        "correct" : false
      },
	  {
        "title" : "D'éviter les attaques informatiques",
        "correct" : false
      },
	  {
        "title" : "De préserver la confidentialité",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le chiffrement des communications permet de lutter contre ?",
    "choices" : [
      {
        "title" : "Les interceptions",
        "correct" : true
      },
      {
        "title" : "Les insomnies",
        "correct" : false
      },
	  {
        "title" : "Les erreurs",
        "correct" : false
      },
	  {
        "title" : "Les pertes",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus parmi les briques de base au niveau des équipements de sécurité ?",
    "choices" : [
      {
        "title" : "Messagerie",
        "correct" : true
      },
      {
        "title" : "Proxy",
        "correct" : false
      },
	  {
        "title" : "VPN",
        "correct" : false
      },
	  {
        "title" : "IDS/IPS",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un VPN permet notamment de ?",
    "choices" : [
      {
        "title" : "Relier 2 réseaux privés via un réseau public",
        "correct" : true
      },
      {
        "title" : "Relier 2 réseaux publics via un réseau privé",
        "correct" : false
      },
	  {
        "title" : "Relier 2 réseaux privés via un 2 réseaux publics",
        "correct" : false
      },
	  {
        "title" : "Relier un réseau privé et un réseau public",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Que signifie le « I » dans le sigle DICP ?",
    "choices" : [
      {
        "title" : "Intégrité",
        "correct" : true
      },
      {
        "title" : "Intrusif",
        "correct" : false
      },
	  {
        "title" : "Impensable",
        "correct" : false
      },
	  {
        "title" : "Indispensable",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un audit doit obligatoirement déboucher sur ?",
    "choices" : [
      {
        "title" : "Un plan d'action concret et pragmatique",
        "correct" : true
      },
      {
        "title" : "Un retour d'expérience",
        "correct" : false
      },
	  {
        "title" : "La création d'une PSSI",
        "correct" : false
      },
	  {
        "title" : "Une liste de vulnérabilités",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Radius est un protocole de ?",
    "choices" : [
      {
        "title" : "Authentification",
        "correct" : true
      },
      {
        "title" : "Filtrage",
        "correct" : false
      },
	  {
        "title" : "Chiffrement",
        "correct" : false
      },
	  {
        "title" : "Contrôle d’intégrité",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L'interception des données est une menace sur ?",
    "choices" : [
      {
        "title" : "La confidentialité",
        "correct" : true
      },
      {
        "title" : "La preuve",
        "correct" : false
      },
	  {
        "title" : "L'intégrité",
        "correct" : false
      },
	  {
        "title" : "La disponibilité",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La criticité c'est ?",
    "choices" : [
      {
        "title" : "Fréquence * Gravité",
        "correct" : true
      },
      {
        "title" : "Vulnérabilités * Gravité",
        "correct" : false
      },
	  {
        "title" : "Risques * Gravité",
        "correct" : false
      },
	  {
        "title" : "Menaces * Gravité",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, quelles sont les différences entre les 2 principaux types de chiffrement ?",
    "choices" : [
      {
        "title" : "Le hachage",
        "correct" : true
      },
      {
        "title" : "Type d'algorithme",
        "correct" : false
      },
	  {
        "title" : "Taille de la clé",
        "correct" : false
      },
	  {
        "title" : "Performances",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La différence entre un virus et un ver est la méthode ?",
    "choices" : [
      {
        "title" : "De propagation",
        "correct" : true
      },
      {
        "title" : "De développement",
        "correct" : false
      },
	  {
        "title" : "De suppression",
        "correct" : false
      },
	  {
        "title" : "D’infection",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "SMSI c'est ?",
    "choices" : [
      {
        "title" : "Système de Management de la Sécurité de l'Information",
        "correct" : true
      },
      {
        "title" : "Système de Maîtrise de la Sécurité de l'Information",
        "correct" : false
      },
	  {
        "title" : "Sécurité et Management des Systèmes d'Information",
        "correct" : false
      },
	  {
        "title" : "Sécurité et Maîtrise des Systèmes d'Information",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Ebios, Méhari et Octave sont des méthodes ?",
    "choices" : [
      {
        "title" : "D’analyse de risques",
        "correct" : true
      },
      {
        "title" : "De protection des réseaux",
        "correct" : false
      },
	  {
        "title" : "De sauvegardes",
        "correct" : false
      },
	  {
        "title" : "De chiffrement",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Une DMZ est une zone qui est ?",
    "choices" : [
      {
        "title" : "Ni publique/ni privée",
        "correct" : true
      },
      {
        "title" : "Privée",
        "correct" : false
      },
	  {
        "title" : "Publique",
        "correct" : false
      },
	  {
        "title" : "Publique ou privée",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Briques de sécurité pour un poste de travail, quel est l'intrus ?",
    "choices" : [
      {
        "title" : "RAM",
        "correct" : true
      },
      {
        "title" : "Accès physique",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Données",
        "correct" : false
      },
	  {
        "title" : "BIOS",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quelle est la différence fondamentale entre Sécurité et Sûreté ?",
    "choices" : [
      {
        "title" : "La malveillance",
        "correct" : true
      },
      {
        "title" : "Le niveau opérationnel",
        "correct" : false
      },
	  {
        "title" : "Aucune",
        "correct" : false
      },
	  {
        "title" : "Ca dépend du contexte",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Une architecture WEB doit au minimum inclure les briques de sécurité suivante ?",
    "choices" : [
      {
        "title" : "Antivirus/DMZ/IPS",
        "correct" : true
      },
      {
        "title" : "Antivirus/DMZ/VPN",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "DNS/DMZ/IPS",
        "correct" : false
      },
	  {
        "title" : "DNS/DMZ/VPN",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Pour être authentifié il faut 2 éléments ?",
    "choices" : [
      {
        "title" : "Identifiant/mot de passe",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Clé/mot de passe",
        "correct" : false
      },
	  {
        "title" : "Identifiant/nom",
        "correct" : false
      },
	  {
        "title" : "Clé/nom",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Active Directory (AD) est ?",
    "choices" : [
      {
        "title" : "Annuaire",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Proxy",
        "correct" : false
      },
	  {
        "title" : "Pare-feu",
        "correct" : false
      },
	  {
        "title" : "Antivirus",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quelle est la différence entre les 2 types de chiffrement?",
    "choices" : [
      {
        "title" : "L’utilisation",
        "correct" : true
      },
      {
        "title" : "La robustesse",
        "correct" : false
      },
	  {
        "title" : "La notoriété",
        "correct" : false
      },
	  {
        "title" : "Aucune",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L'analyse live-forensics est effectuée lorsqu'un système est ?",
    "choices" : [
      {
        "title" : "En fonctionnement",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Arrêté",
        "correct" : false
      },
	  {
        "title" : "En train de redémarrer",
        "correct" : false
      },
	  {
        "title" : "En panne",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Pourquoi le protocole HTTP n'est pas sécurisé ?",
    "choices" : [
      {
        "title" : "Les données ne sont pas chiffrées",
        "correct" : true
      },
      {
        "title" : "Il perd des données",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Il est trop vieux",
        "correct" : false
      },
	  {
        "title" : "Il est sensible aux ondes radios",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Sur un serveur Web, les sites doivent être ?",
    "choices" : [
      {
        "title" : "Sur une partition autre que système",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Sur n'importe quelle partition",
        "correct" : false
      },
	  {
        "title" : "Sur la partition sytème",
        "correct" : false
      },
	  {
        "title" : "Tous sur la même partition un",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "PSSI veut dire ?",
    "choices" : [
      {
        "title" : "Politique de Sécurité des Systèmes d'Information",
        "correct" : true
      },
      {
        "title" : "Pratiques de Sécurité des Systèmes Industriels",
        "correct" : false
      },
	  {
        "title" : "Politique de Sécurité des Systèmes Industriels",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Pratiques de Sécurité des Systèmes d'Information",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Il est possible de se protéger tout ou partie contre une attaque DDOS en ?",
    "choices" : [
      {
        "title" : "Installant des serveurs d'équilibrage de charges",
        "correct" : true
      },
      {
        "title" : "Installant des serveurs chiffrés",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Installant des serveurs de réseaux",
        "correct" : false
      },
	  {
        "title" : "Installant des serveurs de sauvegarde",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le S de HTTPS signifie Secure mais c'est un abus de langage car ?",
    "choices" : [
      {
        "title" : "Cela ne concerne que le chiffrement",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Ca dépend du protocole",
        "correct" : false
      },
	  {
        "title" : "C'est un concept marketing",
        "correct" : false
      },
	  {
        "title" : "Ca dépend de la taille des clés",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Trouver l'intrus, un VPN est utilisé dans les cas suivants ?",
    "choices" : [
      {
        "title" : "Pour relier 2 postes de travail",
        "correct" : true
      },
      {
        "title" : "Pour relier 2 sites d'une entreprise",
        "correct" : false
      },
	  {
        "title" : "Pour relier le réseau d'une entreprise et le réseau de l'un de ses partenaires",
        "correct" : false
      },
	  {
        "title" : "Pour relier 1 réseau d'entreprise et un poste de travail",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quels sont les 2 grands vecteurs d'attaque au niveau des architectures Web ?",
    "choices" : [
      {
        "title" : "Navigateur et Applications",
        "correct" : true
      },
      {
        "title" : "Poste de travail et Applications",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Navigateur et Serveur",
        "correct" : false
      },
	  {
        "title" : "Poste de travail et Serveur",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "XSS, CSRF sont des types de ?",
    "choices" : [
      {
        "title" : "Attaques",
        "correct" : true
      },
      {
        "title" : "Virus",
        "correct" : false
      },
	  {
        "title" : "VPN",
        "correct" : false
      },
	  {
        "title" : "Algorithme de chiffrement",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un SMSI est un Système de … de la Sécurité de l’Information ?",
    "choices" : [
      {
        "title" : "Management",
        "correct" : true
      },
      {
        "title" : "Manipulation",
        "correct" : false
      },
	  {
        "title" : "Mise à jour",
        "correct" : false
      },
	  {
        "title" : "Modification",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quelle est l'une des limites d'un firewall (pare-feu) classique ?",
    "choices" : [
      {
        "title" : "Il peut être un single point of failure",
        "correct" : true
      },
      {
        "title" : "Il peut être contourné très facilement",
        "correct" : false
      },
	  {
        "title" : "Il peut filtrer les connexions",
        "correct" : false
      },
	  {
        "title" : "Ce n'est jamais fiable",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Une panne du réseau est une menace sur ?",
    "choices" : [
      {
        "title" : "La disponibilité",
        "correct" : true
      },
      {
        "title" : "L'intégrité",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "La preuve",
        "correct" : false
      },
	  {
        "title" : "La confidentialité",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'objectif de la haute disponibilté ?",
    "choices" : [
      {
        "title" : "Garantir une disponibilté tendant vers 100%",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Garantir une disponibilté tendant vers 0%",
        "correct" : false
      },
	  {
        "title" : "Garantir une disponibilté d'au moins 50%",
        "correct" : false
      },
	  {
        "title" : "Garantir une disponibilté comprise entre 90 et 110%",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le « déni de service » est une menace contre la ?",
    "choices" : [
      {
        "title" : "Disponibilité",
        "correct" : true
      },
      {
        "title" : "Perte de confiance",
        "correct" : false
      },
	  {
        "title" : "Dépression",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Confidentialité",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Pour se protéger contre l'écoute passive sur un réseau sans-fil, il faut ?",
    "choices" : [
      {
        "title" : "Chiffrer les communications",
        "correct" : true
      },
      {
        "title" : "Utiliser un pare-feu",
        "correct" : false
      },
	  {
        "title" : "Sauvegarder les communications",
        "correct" : false
      },
	  {
        "title" : "Utiliser un antivirus",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un audit doit déboucher sur ?",
    "choices" : [
      {
        "title" : "Des recommandations",
        "correct" : true
      },
      {
        "title" : "Un plan d’actions",
        "correct" : false
      },
	  {
        "title" : "Des mesures de sécurité",
        "correct" : false
      },
	  {
        "title" : "Un plan de reprise",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Que signifie le « P » dans le sigle DICP ?",
    "choices" : [
      {
        "title" : "Preuve",
        "correct" : true
      },
      {
        "title" : "Potentiel",
        "correct" : false
      },
	  {
        "title" : "Pratique",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Physique",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un Rogue Access Point est un point d'accès ?",
    "choices" : [
      {
        "title" : "Pirate",
        "correct" : true
      },
      {
        "title" : "En panne",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Chiffré",
        "correct" : false
      },
	  {
        "title" : "Réseau",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "WPA2 est un protocole permettant de sécuriser ?",
    "choices" : [
      {
        "title" : "Un réseau sans-fil",
        "correct" : true
      },
      {
        "title" : "Un poste de travail",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Un smartphone",
        "correct" : false
      },
	  {
        "title" : "Un réseau filaire",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La ligne de temps permet ?",
    "choices" : [
      {
        "title" : "D'avoir l'enchainement des évènements",
        "correct" : true
      },
      {
        "title" : "D'avoir la liste des fichiers",
        "correct" : false
      },
	  {
        "title" : "De récupérer l'heure système",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "De géolocaliser les smartphones",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le principe du cloisonnement est de … différentes zones d’un réseau ?",
    "choices" : [
      {
        "title" : "Partitionner",
        "correct" : true
      },
      {
        "title" : "Sécuriser",
        "correct" : false
      },
	  {
        "title" : "Différencier",
        "correct" : false
      },
	  {
        "title" : "Sauvegarder",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, un VLAN permet de ?",
    "choices" : [
      {
        "title" : "Détecter les attaques",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Améliorer la gestion du réseau",
        "correct" : false
      },
	  {
        "title" : "Séparer les flux",
        "correct" : false
      },
	  {
        "title" : "Optimiser la bande passante",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Active Directory est ?",
    "choices" : [
      {
        "title" : "L'annuaire de Microsoft",
        "correct" : true
      },
      {
        "title" : "L'antivirus de Microsoft",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Le protocole d'authentification de Microsoft",
        "correct" : false
      },
	  {
        "title" : "Le service de mise à jour de Microsoft",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La norme 27002 correspond à ?",
    "choices" : [
      {
        "title" : "Guide de bonnes pratiques",
        "correct" : true
      },
      {
        "title" : "Analyse des risques",
        "correct" : false
      },
	  {
        "title" : "Exigences pour le SMSI",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Métrique et mesure",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, un Audit a pour objectif ?",
    "choices" : [
      {
        "title" : "Implémenter une PSSI",
        "correct" : true
      },
      {
        "title" : "Avoir un avis extérieur",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Vérifier la PSSI",
        "correct" : false
      },
	  {
        "title" : "Identifier les vulnérabilités",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le filtrage des URLs permet de se prémunir contre ?",
    "choices" : [
      {
        "title" : "Certains malwares",
        "correct" : true
      },
      {
        "title" : "Les attaques de type MITM",
        "correct" : false
      },
	  {
        "title" : "Les attaques par Déni de Service",
        "correct" : false
      },
	  {
        "title" : "La saturation des réseaux",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un VPN permet de ?",
    "choices" : [
      {
        "title" : "Chiffrer",
        "correct" : true
      },
      {
        "title" : "Sauvegarder",
        "correct" : false
      },
	  {
        "title" : "Cloisonner",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Se protéger contre les virus",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le protocole ARP permet d'associer une ?",
    "choices" : [
      {
        "title" : "Adresse IP et une adresse MAC",
        "correct" : true
      },
      {
        "title" : "Adresse IP privée et un nom de domaine",
        "correct" : false
      },
	  {
        "title" : "Adresse IP publique et une adresse IP privée",
        "correct" : false
      },
	  {
        "title" : "Adresse IP publique et un nom de domaine",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Pour éviter la perte des données, il faut avoir une politique de ?",
    "choices" : [
      {
        "title" : "Sauvegarde",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Mise à jour",
        "correct" : false
      },
	  {
        "title" : "Chiffrement",
        "correct" : false
      },
	  {
        "title" : "Vulnérabilités",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L'analyse de risques permet d' ?",
    "choices" : [
      {
        "title" : "Evaluer les pertes",
        "correct" : true
      },
      {
        "title" : "Evaluer les risques",
        "correct" : false
      },
	  {
        "title" : "Evaluer les bisounours",
        "correct" : false
      },
	  {
        "title" : "Evaluer les menaces",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un rootkit permet de ?",
    "choices" : [
      {
        "title" : "De maintenir un accès frauduleux",
        "correct" : true
      },
      {
        "title" : "D'effacer des données",
        "correct" : false
      },
	  {
        "title" : "De voler des données",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Créer une porte dérobée",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La différence principale entre un firewall « classique » et un firewall applicatif est ?",
    "choices" : [
      {
        "title" : "Les couches réseau impactées",
        "correct" : true
      },
      {
        "title" : "Les applications embarquées",
        "correct" : false
      },
	  {
        "title" : "Le coût",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Le type d’attaques arrêtées",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le DLP permet de protéger ?",
    "choices" : [
      {
        "title" : "Les données",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Les applications",
        "correct" : false
      },
	  {
        "title" : "Les réseaux",
        "correct" : false
      },
	  {
        "title" : "Les serveurs",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L'application du principe du moindre privilège permet de ?",
    "choices" : [
      {
        "title" : "Réduire la surface d'attaque",
        "correct" : true
      },
      {
        "title" : "Eviter les virus",
        "correct" : false
      },
	  {
        "title" : "Réduire les risques de DDOS",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Eviter les pertes d'informations",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le but du phishing est de faire croire qu'un message ?",
    "choices" : [
      {
        "title" : "Provient d'un tiers de confiance",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Est frauduleux",
        "correct" : false
      },
	  {
        "title" : "Est sans virus",
        "correct" : false
      },
	  {
        "title" : "Provient d'un ami",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La différence entre l’identification et l’authentification correspond à la notion de ?",
    "choices" : [
      {
        "title" : "Preuve",
        "correct" : true
      },
      {
        "title" : "Confidentialité",
        "correct" : false
      },
	  {
        "title" : "Traçabilité",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Intégrité",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Dans une défense en profondeur, les différentes couches doivent être ?",
    "choices" : [
      {
        "title" : "Indépendantes",
        "correct" : true
      },
      {
        "title" : "Interdépendantes",
        "correct" : false
      },
	  {
        "title" : "Dépendantes",
        "correct" : false
      },
	  {
        "title" : "Etanches",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Pourquoi la sécurité à 100% n'existe pas ?",
    "choices" : [
      {
        "title" : "Il n'est pas possible d'être exhaustif au niveau de la connaissance des menaces",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Il n'est pas possible d'acheter tous les équipements de sécurité",
        "correct" : false
      },
	  {
        "title" : "Les ingénieurs en sécurité seraient au chômage",
        "correct" : false
      },
	  {
        "title" : "Les protocoles de sécurité ne sont pas toujours fiables",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Que signifie SMSI ?",
    "choices" : [
      {
        "title" : "Système de Management de la Sécurité de l’Information",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Système de Modélisation de la Sécurité de l’Information",
        "correct" : false
      },
	  {
        "title" : "Sécurité, Malware, Sûreté et Informatique",
        "correct" : false
      },
	  {
        "title" : "Système, Management et Sécurité Informatique",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, un firewall (pare-feu) d'infrastructure classique n'intègre pas les fonctionnalités suivantes ?",
    "choices" : [
      {
        "title" : "Filtrage",
        "correct" : true
      },
      {
        "title" : "Protection contre le DDOS",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Protection contre les fuites d'information",
        "correct" : false
      },
	  {
        "title" : "Antivirus",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, l'Audit de code permet de ?",
    "choices" : [
      {
        "title" : "Créer des vulnérabilités",
        "correct" : true
      },
      {
        "title" : "Trouver des vulnérabilités",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Formuler des recommandations",
        "correct" : false
      },
	  {
        "title" : "Caractériser les vulnérabilités",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le protocole DNS permet d'associer une ?",
    "choices" : [
      {
        "title" : "Adresse IP et un nom de domaine",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Adresse MAC et un nom de domaine",
        "correct" : false
      },
	  {
        "title" : "Adresse IP publique et une adresse IP privée",
        "correct" : false
      },
	  {
        "title" : "Adresse IP et une adresse MAC",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La traçabilité permet ?",
    "choices" : [
      {
        "title" : "D'imputer l'origine d'une action",
        "correct" : true
      },
      {
        "title" : "De sauvegarder les données",
        "correct" : false
      },
	  {
        "title" : "D'empêcher la modification des données",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "De sécuriser les données",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La différence entre le mode ad hoc et le mode infrastructure est l’utilisation ?",
    "choices" : [
      {
        "title" : "De points d’accès",
        "correct" : true
      },
      {
        "title" : "De méthodes de chiffrement différentes",
        "correct" : false
      },
	  {
        "title" : "De clés USB",
        "correct" : false
      },
	  {
        "title" : "De logiciels différents",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L'une des différences entre un concentrateur (hub) et un commutateur (switch) est ?",
    "choices" : [
      {
        "title" : "La manière de diffuser le trafic",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "La couleur",
        "correct" : false
      },
	  {
        "title" : "La séparation des différents réseaux",
        "correct" : false
      },
	  {
        "title" : "Le taux de disponibilité",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le principe de base des architectures sécurisées est ?",
    "choices" : [
      {
        "title" : "Le cloisonnement",
        "correct" : true
      },
      {
        "title" : "La sauvegarde",
        "correct" : false
      },
	  {
        "title" : "L’authentification",
        "correct" : false
      },
	  {
        "title" : "Le chiffrement",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "EFS ?",
    "choices" : [
      {
        "title" : "Chiffrement",
        "correct" : true
      },
      {
        "title" : "Biométrie",
        "correct" : false
      },
	  {
        "title" : "Sécurisation",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Authentification",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La signature électronique permet de garantir ?",
    "choices" : [
      {
        "title" : "L’authentification et l’intégrité",
        "correct" : true
      },
      {
        "title" : "Aucune des 2",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "L’authentification",
        "correct" : false
      },
	  {
        "title" : "L’intégrité",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Les Audits de vulnérabilités permettent de découvrir ?",
    "choices" : [
      {
        "title" : "Des failles",
        "correct" : true
      },
      {
        "title" : "Des compromissions",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Des attaques",
        "correct" : false
      },
	  {
        "title" : "Des méthodes d'analyse",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un proxy (serveur mandataire) est utilisé pour ?",
    "choices" : [
      {
        "title" : "Gérer l'accès à internet",
        "correct" : true
      },
      {
        "title" : "Je ne sais pas",
        "correct" : false
      },
	  {
        "title" : "Gérer la messagerie",
        "correct" : false
      },
	  {
        "title" : "Déployer les antivirus",
        "correct" : false
      },
	  {
        "title" : "Déployer les patchs",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La Sécurité des Systèmes d’Information c’est une gestion ?",
    "choices" : [
      {
        "title" : "Des risques",
        "correct" : true
      },
      {
        "title" : "Des vulnérabilités",
        "correct" : false
      },
	  {
        "title" : "Des menaces",
        "correct" : false
      },
	  {
        "title" : "Des Potentialités",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Que signifie le « D » dans le sigle DICP ?",
    "choices" : [
      {
        "title" : "Disponibilité",
        "correct" : true
      },
      {
        "title" : "Délai",
        "correct" : false
      },
	  {
        "title" : "Dommages",
        "correct" : false
      },
	  {
        "title" : "Données",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L’habilitation consiste à vérifier qu’une entité a ?",
    "choices" : [
      {
        "title" : "Les droits",
        "correct" : true
      },
      {
        "title" : "Les devoirs",
        "correct" : false
      },
	  {
        "title" : "Eté journalisée",
        "correct" : false
      },
	  {
        "title" : "Eté contrôlée",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, les principaux risques pour un poste de travail ?",
    "choices" : [
      {
        "title" : "Utilisation du poste pour faire une attaque de type RROS",
        "correct" : true
      },
      {
        "title" : "Vol du poste de travail",
        "correct" : false
      },
	  {
        "title" : "Utilisation du poste pour faire du mass-mailing",
        "correct" : false
      },
	  {
        "title" : "Utilisation du poste pour accéder au SI de l'entreprise",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Authentification, quel est l’intrus ?",
    "choices" : [
      {
        "title" : "Ce que je pense",
        "correct" : true
      },
      {
        "title" : "Ce que je possède",
        "correct" : false
      },
	  {
        "title" : "Ce que je sais",
        "correct" : false
      },
	  {
        "title" : "Ce que je suis",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quelle est la différence entre le 802.11n et 802.11ac ?",
    "choices" : [
      {
        "title" : "La manière d'envoyer les données aux utilisateurs",
        "correct" : true
      },
      {
        "title" : "La vitesse de propagation des ondes",
        "correct" : false
      },
	  {
        "title" : "La vitesse de réponse des utilisateurs",
        "correct" : false
      },
	  {
        "title" : "La manière de chiffrer les données",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La profondeur de l'audit dépend ?",
    "choices" : [
      {
        "title" : "De la taille de l'entreprise",
        "correct" : true
      },
      {
        "title" : "Du temps des auditeurs",
        "correct" : false
      },
	  {
        "title" : "Des compétences des auditeurs",
        "correct" : false
      },
	  {
        "title" : "De la localisation de l'entreprise",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Une connexion sauvage est une connexion qui ?",
    "choices" : [
      {
        "title" : "N'a pas été autorisée par l'entreprise",
        "correct" : true
      },
      {
        "title" : "Qui n'est pas sécurisée",
        "correct" : false
      },
	  {
        "title" : "Qui n'est pas chiffrée",
        "correct" : false
      },
	  {
        "title" : "N'a pas appris à lire et à écrire",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L’audit intrusif permet notamment de rechercher ?",
    "choices" : [
      {
        "title" : "Les vulnérabilités",
        "correct" : true
      },
      {
        "title" : "Les erreurs de codage",
        "correct" : false
      },
	  {
        "title" : "Les problèmes d'installation",
        "correct" : false
      },
	  {
        "title" : "Les virus",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Que signifie le « C » dans le sigle DICP ?",
    "choices" : [
      {
        "title" : "Confidentialité",
        "correct" : true
      },
      {
        "title" : "Connexion",
        "correct" : false
      },
	  {
        "title" : "Configuration",
        "correct" : false
      },
	  {
        "title" : "Chiffrement",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le network forensique permet de ?",
    "choices" : [
      {
        "title" : "Déterminer l'origine des incidents",
        "correct" : true
      },
      {
        "title" : "Déterminer l'origine des menaces",
        "correct" : false
      },
	  {
        "title" : "Déterminer l'origine des risques",
        "correct" : false
      },
	  {
        "title" : "Déterminer l'origine des applications",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Au niveau de l'analyse forensique, la première étape est de faire ?",
    "choices" : [
      {
        "title" : "Un constat de l'incident",
        "correct" : true
      },
      {
        "title" : "Une analyse des données",
        "correct" : false
      },
	  {
        "title" : "Un retour d'expérience",
        "correct" : false
      },
	  {
        "title" : "Une extraction des données",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un HIPS permet de ?",
    "choices" : [
      {
        "title" : "Bloquer les attaques connues",
        "correct" : true
      },
      {
        "title" : "Bloquer les applications interdites",
        "correct" : false
      },
	  {
        "title" : "Bloquer les flux inconnus",
        "correct" : false
      },
	  {
        "title" : "Bloquer les attaques inconnues",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, un firewall (pare-feu) protège contre ?",
    "choices" : [
      {
        "title" : "L'écoute du réseau",
        "correct" : true
      },
      {
        "title" : "Connexions sortantes",
        "correct" : false
      },
	  {
        "title" : "Prolifération de malwares",
        "correct" : false
      },
	  {
        "title" : "Connexions entrantes",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'avantage d'un VPN SSL en entreprise ?",
    "choices" : [
      {
        "title" : "Pas besoin de déployer un logiciel spécifique sur les postes de travail",
        "correct" : true
      },
      {
        "title" : "Pas besoin de sauvegarder les postes de travail",
        "correct" : false
      },
	  {
        "title" : "Pas besoin de déployer un certificat sur les postes de travail",
        "correct" : false
      },
	  {
        "title" : "Pas besoin de mettre un antivirus sur les postes de travail",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, au niveau du stockage des données lequel n'existe pas ?",
    "choices" : [
      {
        "title" : "Réseau de serveurs",
        "correct" : true
      },
      {
        "title" : "Serveur de fichiers",
        "correct" : false
      },
	  {
        "title" : "NAS",
        "correct" : false
      },
	  {
        "title" : "SAN",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "10.11.12.13 est une adresse ?",
    "choices" : [
      {
        "title" : "Privée",
        "correct" : true
      },
      {
        "title" : "Publique",
        "correct" : false
      },
	  {
        "title" : "Publique ou privée",
        "correct" : false
      },
	  {
        "title" : "Publique et privée",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un Audit doit ?",
    "choices" : [
      {
        "title" : "Avoir des objectifs et un périmètre",
        "correct" : true
      },
      {
        "title" : "Ne pas être trop intrusif",
        "correct" : false
      },
	  {
        "title" : "Durer jusqu'à la découverte d'une faille",
        "correct" : false
      },
	  {
        "title" : "Avoir un retour sur investissement",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La Sécurité des Systèmes d'Information est une ?",
    "choices" : [
      {
        "title" : "Gestion des risques",
        "correct" : true
      },
      {
        "title" : "Gestion des menaces",
        "correct" : false
      },
	  {
        "title" : "Gestion des données",
        "correct" : false
      },
	  {
        "title" : "Les 3",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un firewall permet de ?",
    "choices" : [
      {
        "title" : "Filtrer",
        "correct" : true
      },
      {
        "title" : "Chiffrer",
        "correct" : false
      },
	  {
        "title" : "Sauvegarder",
        "correct" : false
      },
	  {
        "title" : "Authentifier",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Pour toute donnée entrante via un formulaire, nous devons confirmer ?",
    "choices" : [
      {
        "title" : "Sa validité",
        "correct" : true
      },
      {
        "title" : "Son chiffrement",
        "correct" : false
      },
	  {
        "title" : "Sa sauvegarde",
        "correct" : false
      },
	  {
        "title" : "Son invalidité",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L'analyse dead-forensics consiste à ?",
    "choices" : [
      {
        "title" : "Analyser des supports de masse",
        "correct" : true
      },
      {
        "title" : "Analyser la RAM",
        "correct" : false
      },
	  {
        "title" : "Analyser le réseau",
        "correct" : false
      },
	  {
        "title" : "Analyser le clavier",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, le protocole FTP est sensible ?",
    "choices" : [
      {
        "title" : "Au DDOS",
        "correct" : true
      },
      {
        "title" : "Au rejeu",
        "correct" : false
      },
	  {
        "title" : "A l'écoute",
        "correct" : false
      },
	  {
        "title" : "Au MITM",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, quelles sont les limites de la cryptographie ?",
    "choices" : [
      {
        "title" : "Preuve",
        "correct" : true
      },
      {
        "title" : "Erreurs d'implémentation",
        "correct" : false
      },
	  {
        "title" : "Générateurs de nombres aléatoires",
        "correct" : false
      },
	  {
        "title" : "Puissance de calcul",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Pourquoi SSL n'est pas un protocole vraiment sécurisé ?",
    "choices" : [
      {
        "title" : "Il n'assure que le chiffrement",
        "correct" : true
      },
      {
        "title" : "Il ne protège pas contre les malwares",
        "correct" : false
      },
	  {
        "title" : "Il n'assure pas la disponibilité",
        "correct" : false
      },
	  {
        "title" : "Le cadenas est trop petit",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un audit en aveugle est effectué ?",
    "choices" : [
      {
        "title" : "Sans aucune connaissance du SI",
        "correct" : true
      },
      {
        "title" : "Avec les équipes techniques de l'entreprise",
        "correct" : false
      },
	  {
        "title" : "Depuis l'Internet",
        "correct" : false
      },
	  {
        "title" : "Avec un aveugle pour éviter la fuite d'informations",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Sécurité du poste de travail, quel est l’intrus ?",
    "choices" : [
      {
        "title" : "Suite bureautique",
        "correct" : true
      },
      {
        "title" : "Mises à jour",
        "correct" : false
      },
	  {
        "title" : "Pare-feu personnel",
        "correct" : false
      },
	  {
        "title" : "Antivirus",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "En sécurité, le maillon faible est souvent l'être humain. Comment se prémunir contre cela ?",
    "choices" : [
      {
        "title" : "Sensibiliser le maillon faible",
        "correct" : true
      },
      {
        "title" : "Remplacer le maillon faible",
        "correct" : false
      },
	  {
        "title" : "Eliminer le maillon faible",
        "correct" : false
      },
	  {
        "title" : "Ne rien faire",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La confiance sur Internet est basée sur l'utilisations de ?",
    "choices" : [
      {
        "title" : "Certificats",
        "correct" : true
      },
      {
        "title" : "VPN",
        "correct" : false
      },
	  {
        "title" : "Cloud computing",
        "correct" : false
      },
	  {
        "title" : "Moyens d'authentification forte",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La différence principale entre les technologies WPAN, WLAN, WMAN, WWAN est ?",
    "choices" : [
      {
        "title" : "La portée",
        "correct" : true
      },
      {
        "title" : "La sécurité",
        "correct" : false
      },
	  {
        "title" : "La proportionnalité",
        "correct" : false
      },
	  {
        "title" : "Aucune des 3 réponses",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Le NAC ou NAP permet de contrôler si un poste de travail respecte la politique de ?",
    "choices" : [
      {
        "title" : "Sécurité",
        "correct" : true
      },
      {
        "title" : "DLP",
        "correct" : false
      },
	  {
        "title" : "Sauvegarde",
        "correct" : false
      },
	  {
        "title" : "Mise à jour",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Au niveau des smatphones, la plupart des données sont stockées dans ?",
    "choices" : [
      {
        "title" : "Des bases de doonnées SQLites",
        "correct" : true
      },
      {
        "title" : "Des fichiers textes",
        "correct" : false
      },
	  {
        "title" : "Des photos",
        "correct" : false
      },
	  {
        "title" : "Des fichiers HTML",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La collecte de données sensibles est ?",
    "choices" : [
      {
        "title" : "Interdite",
        "correct" : true
      },
      {
        "title" : "Coûteuse",
        "correct" : false
      },
	  {
        "title" : "Obligatoire",
        "correct" : false
      },
	  {
        "title" : "Autorisée",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L’objectif d’HADOPI est de sanctionner le ?",
    "choices" : [
      {
        "title" : "Téléchargement illégal",
        "correct" : true
      },
      {
        "title" : "Blanchiment d'argent",
        "correct" : false
      },
	  {
        "title" : "Piratage",
        "correct" : false
      },
	  {
        "title" : "Vol de données",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "En cas d'utilisation de moyens cryptographiques, les clés doivent être déposées auprès de ?",
    "choices" : [
      {
        "title" : "L'ANSSI",
        "correct" : true
      },
      {
        "title" : "La CNIL",
        "correct" : false
      },
	  {
        "title" : "La DGSE",
        "correct" : false
      },
	  {
        "title" : "La DGSI",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Dans un réseau Wi-fi, Quelle est la menace pour laquelle, il n'existe pas solution ?",
    "choices" : [
      {
        "title" : "Déni de service",
        "correct" : true
      },
      {
        "title" : "Virus",
        "correct" : false
      },
	  {
        "title" : "Perte d’intégrité",
        "correct" : false
      },
	  {
        "title" : "Perte du confinement",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un bon mot de passe doit avoir ?",
    "choices" : [
      {
        "title" : "Au moins 8 caractères",
        "correct" : true
      },
      {
        "title" : "Aucun chiffre",
        "correct" : false
      },
	  {
        "title" : "Au plus 8 caractères",
        "correct" : false
      },
	  {
        "title" : "Que des chiffres",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "La norme 27005 correspond à ?",
    "choices" : [
      {
        "title" : "Analyse des risques",
        "correct" : true
      },
      {
        "title" : "Exigences pour le SMSI",
        "correct" : false
      },
	  {
        "title" : "Métrique et mesure",
        "correct" : false
      },
	  {
        "title" : "Guide de bonnes pratiques",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, la cryptographie est utilisée dans les domaines suivants ?",
    "choices" : [
      {
        "title" : "Réseaux sociaux",
        "correct" : true
      },
      {
        "title" : "Messagerie électronique",
        "correct" : false
      },
	  {
        "title" : "E-commerce",
        "correct" : false
      },
	  {
        "title" : "Signature électronique",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Pourquoi la sécurité n'est pas qu'un problème technique ?",
    "choices" : [
      {
        "title" : "Elle doit aussi s'appuyer sur des procédures",
        "correct" : true
      },
      {
        "title" : "Elle doit aussi s'appuyer sur le réseau",
        "correct" : false
      },
	  {
        "title" : "Elle doit aussi s'appuyer sur le mur",
        "correct" : false
      },
	  {
        "title" : "Elle doit aussi s'appuyer sur le bon vouloir des personnes",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Un ver est un programme qui peut ?",
    "choices" : [
      {
        "title" : "Se copier d'un ordinateur à un autre ordinateur",
        "correct" : true
      },
      {
        "title" : "Infecter un autre programme",
        "correct" : false
      },
	  {
        "title" : "Détruire des données",
        "correct" : false
      },
	  {
        "title" : "Créer une porte dérobée",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "L'Impact est la conséquence de la réalisation ?",
    "choices" : [
      {
        "title" : "D'une menace",
        "correct" : true
      },
      {
        "title" : "D'un risque",
        "correct" : false
      },
	  {
        "title" : "D'une vulnérabilité",
        "correct" : false
      },
	  {
        "title" : "D'une ressource",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "193.50.230.230 est une adresse ?",
    "choices" : [
      {
        "title" : "Publique",
        "correct" : true
      },
      {
        "title" : "Privée",
        "correct" : false
      },
	  {
        "title" : "Publique ou privée",
        "correct" : false
      },
	  {
        "title" : "Publique et privée",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Quel est l'intrus, le protocole HTTP est sensible ?",
    "choices" : [
      {
        "title" : "Au DDOS",
        "correct" : true
      },
      {
        "title" : "A l'écoute",
        "correct" : false
      },
	  {
        "title" : "Au rejeu",
        "correct" : false
      },
	  {
        "title" : "Au MITM",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Pourquoi l'erreur HTTP error 404 peut poser un problème de sécurité ?",
    "choices" : [
      {
        "title" : "Cela peut divulguer des informations",
        "correct" : true
      },
      {
        "title" : "Ce n'est pas joli",
        "correct" : false
      },
	  {
        "title" : "Le déni de service est possible",
        "correct" : false
      },
	  {
        "title" : "Cela permet de rebondir sur un autre serveur",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  },
  
  {
    "title" : "Une solution de DLP permet de lutter contre la ?",
    "choices" : [
      {
        "title" : "Fuite d’informations",
        "correct" : true
      },
      {
        "title" : "Perte des disques durs",
        "correct" : false
      },
	  {
        "title" : "Corruption des réseaux",
        "correct" : false
      },
	  {
        "title" : "Prolifération des virus",
        "correct" : false
      },
	  {
        "title" : "Je ne sais pas",
        "correct" : false
      }
    ]
  }
];