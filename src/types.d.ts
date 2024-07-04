//Page
export interface Navbar {
  title: String;
  rgb: RGB;
}

//Layout
export interface Layout {
  navbar: Navbar;
  hero: Hero;
  footer: Footer;
}

//Navbar
export interface Navbar {
  title: String;
  links: Link[];
}

export interface Link {
  href: String;
  text: Text;
}

export interface Skill {
  skillBullet: SkillBullet;
}

export interface SkillBullet {
  skillName: String;
  skillType: Number;
}

//Hero
export interface Hero {
  title: String;
  welcome: String;
  description: String;
}

//Footer
export interface Footer {
  contactBar: ContactBar;
  seperator: Seperator;
}
export interface Seperator {
  url: String;
}

export interface Component {
  cards: Card[];
  skills: Skills;
}

export interface Card {
  title: String;
  url: String;
}

export interface Skills {
  name: String;
}
export interface Contact {
  contactIcon: {
    url: String;
  };
  contactLink: {
    href: String;
    text: String;
  };
  contactBackground: {
    rgb: RGB;
  };
  contactTextColor: {
    rgb: RGB;
  };
}

export interface ContactBar {
  contactList: Contact[];
}

export interface RGB {
  r: Number;
  g: Number;
  b: Number;
}

export interface Contact {
  contactLink: Link;
  rgb: RGB;
}

export interface Theme {
  List: ThemeList;
  themeLabel: String;
}
export interface ThemeList {
  paltetteLabel: String;
}
