interface Administrateur {
    nom: string;
    email: string;
    ip: string;
    dt_connexion: Date;
    login: string;
    password: string;
  }
  

  type UserAnonymeUtilitaire = Partial<Pick<Administrateur, 'nom'>> & Required<Pick<Administrateur, 'ip'>>;
  interface UtilisateurAnonyme {
    nom?: string;
    ip: string;
  }
  

  const test: UserAnonymeUtilitaire = { ip: 'test', nom: 'test' };
  