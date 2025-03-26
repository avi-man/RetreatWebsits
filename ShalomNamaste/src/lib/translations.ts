import type { Language } from './language';

export interface Translation {
  navigation: {
    home: string;
    about: string;
    packages: string;
    blog: string;
    contact: string;
  };
  common: {
    readMore: string;
    bookNow: string;
    learnMore: string;
  };
  home: {
    hero: {
      title: string;
      subtitle: string;
    };
    features: {
      title: string;
      subtitle: string;
      wellness: {
        title: string;
        description: string;
      };
      culture: {
        title: string;
        description: string;
      };
      adventure: {
        title: string;
        description: string;
      };
      noPackages: string;
    };
    cta: {
      title: string;
      subtitle: string;
    };
  };
  about: {
    title: string;
    subtitle: string;
    story: {
      title: string;
      description: string;
      vision: string;
    };
    team: {
      title: string;
      subtitle: string;
      sarah: {
        name: string;
        role: string;
        bio: string;
      };
      rajesh: {
        name: string;
        role: string;
        bio: string;
      };
    };
    values: {
      title: string;
      subtitle: string;
      authenticity: {
        title: string;
        description: string;
      };
      community: {
        title: string;
        description: string;
      };
      transformation: {
        title: string;
        description: string;
      };
    };
  };
  packages: {
    title: string;
    subtitle: string;
    meditation: {
      title: string;
      description: string;
      features: string[];
      price: string;
    };
    yoga: {
      title: string;
      description: string;
      features: string[];
      price: string;
    };
    adventure: {
      title: string;
      description: string;
      features: string[];
      price: string;
    };
    faq: {
      title: string;
      questions: {
        q1: string;
        a1: string;
        q2: string;
        a2: string;
        q3: string;
        a3: string;
      };
    };
    untitled: string;
    noDescription: string;
    priceOnRequest: string;
  };
  blog: {
    title: string;
    subtitle: string;
    readMore: string;
    author: {
      bio: string;
    };
    untitled: string;
    noExcerpt: string;
    noDate: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
  };
  error: {
    pageNotFound: string;
    backToHome: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    navigation: {
      home: 'Home',
      about: 'About',
      packages: 'Packages',
      blog: 'Blog',
      contact: 'Contact'
    },
    common: {
      readMore: 'Read More',
      bookNow: 'Book Now',
      learnMore: 'Learn More'
    },
    home: {
      hero: {
        title: 'Find Your Inner Peace',
        subtitle: 'Experience the perfect blend of Jewish and Hindu wellness traditions'
      },
      features: {
        title: 'Why Choose Us',
        subtitle: 'Discover the unique benefits of our retreats',
        wellness: {
          title: 'Holistic Wellness',
          description: 'Experience a comprehensive approach to health and well-being'
        },
        culture: {
          title: 'Cultural Immersion',
          description: 'Deep dive into ancient traditions and practices'
        },
        adventure: {
          title: 'Adventure & Exploration',
          description: 'Combine spiritual growth with exciting experiences'
        },
        noPackages: 'No featured packages available at the moment.'
      },
      cta: {
        title: 'Ready to Begin Your Journey?',
        subtitle: 'Join us for an unforgettable experience of wellness, culture, and adventure'
      }
    },
    about: {
      title: 'Our Story',
      subtitle: 'A fusion of Eastern and Western wellness traditions',
      story: {
        title: 'Our Journey',
        description: 'Shalom Namaste was born from a deep appreciation for both Jewish and Hindu spiritual traditions, and a desire to create a space where these ancient wisdoms could come together in harmony.',
        vision: 'Our vision is to provide transformative experiences that bridge cultural divides and foster understanding between different spiritual paths.'
      },
      team: {
        title: 'Our Team',
        subtitle: 'Meet the people behind Shalom Namaste',
        sarah: {
          name: 'Sarah Cohen',
          role: 'Founder & Spiritual Director',
          bio: 'With over 15 years of experience in Jewish spiritual practices and meditation.'
        },
        rajesh: {
          name: 'Rajesh Sharma',
          role: 'Yoga & Wellness Director',
          bio: 'A certified yoga instructor with expertise in traditional Hindu practices.'
        }
      },
      values: {
        title: 'Our Values',
        subtitle: 'The principles that guide everything we do',
        authenticity: {
          title: 'Authenticity',
          description: 'We honor and preserve the integrity of both traditions.'
        },
        community: {
          title: 'Community',
          description: 'Building bridges between cultures through shared experiences.'
        },
        transformation: {
          title: 'Transformation',
          description: 'Creating lasting positive change in our guests\' lives.'
        }
      }
    },
    packages: {
      title: 'Our Retreats',
      subtitle: 'Choose the perfect experience for your journey',
      meditation: {
        title: 'Meditation & Mindfulness Retreat',
        description: 'A week-long journey into deep meditation and mindfulness practices.',
        features: [
          'Daily guided meditation sessions',
          'Mindfulness workshops',
          'Nature walks',
          'Traditional ceremonies',
          'Healthy vegetarian meals'
        ],
        price: '$1,999'
      },
      yoga: {
        title: 'Yoga & Wellness Retreat',
        description: 'Transform your body and mind through ancient yoga practices.',
        features: [
          'Twice daily yoga classes',
          'Wellness workshops',
          'Spa treatments',
          'Cultural activities',
          'Organic meals'
        ],
        price: '$2,499'
      },
      adventure: {
        title: 'Adventure & Spirituality Retreat',
        description: 'Combine physical adventure with spiritual growth.',
        features: [
          'Hiking expeditions',
          'Meditation sessions',
          'Cultural immersion',
          'Adventure activities',
          'Local cuisine'
        ],
        price: '$2,999'
      },
      faq: {
        title: 'Frequently Asked Questions',
        questions: {
          q1: 'What is included in the retreat packages?',
          a1: 'All packages include accommodation, meals, activities, and transportation from the airport.',
          q2: 'Do I need previous experience?',
          a2: 'No previous experience is required. Our programs are suitable for all levels.',
          q3: 'What should I bring?',
          a3: 'We\'ll provide a detailed packing list upon booking.'
        }
      },
      untitled: 'Untitled Package',
      noDescription: 'No description available',
      priceOnRequest: 'Price on request'
    },
    blog: {
      title: 'Our Blog',
      subtitle: 'Insights, stories, and wisdom from our community',
      readMore: 'Read More',
      author: {
        bio: 'A passionate writer and spiritual seeker sharing insights from our community.'
      },
      untitled: 'Untitled Post',
      noExcerpt: 'No excerpt available',
      noDate: 'Date not available'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Get in touch with us to learn more',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message'
    },
    error: {
      pageNotFound: 'The page you\'re looking for doesn\'t exist.',
      backToHome: 'Back to Home'
    }
  },
  he: {
    navigation: {
      home: 'דף הבית',
      about: 'אודות',
      packages: 'חבילות',
      blog: 'בלוג',
      contact: 'צור קשר'
    },
    common: {
      readMore: 'קרא עוד',
      bookNow: 'הזמן עכשיו',
      learnMore: 'למד עוד'
    },
    home: {
      hero: {
        title: 'מצא את השלווה הפנימית שלך',
        subtitle: 'חווה את השילוב המושלם של מסורות בריאות יהודיות והינדיות'
      },
      features: {
        title: 'למה לבחור בנו',
        subtitle: 'גלה את היתרונות הייחודיים של הסדנאות שלנו',
        wellness: {
          title: 'בריאות הוליסטית',
          description: 'חווה גישה מקיפה לבריאות ורווחה'
        },
        culture: {
          title: 'טבילה תרבותית',
          description: 'צלילה עמוקה למסורות ותרגולים עתיקים'
        },
        adventure: {
          title: 'הרפתקה וחקירה',
          description: 'שלב הרפתקה פיזית עם צמיחה רוחנית'
        },
        noPackages: 'אין חבילות מוצגות כרגע.'
      },
      cta: {
        title: 'מוכנים להתחיל את המסע?',
        subtitle: 'הצטרפו אלינו לחוויה בלתי נשכחת של בריאות, תרבות והרפתקה'
      }
    },
    about: {
      title: 'הסיפור שלנו',
      subtitle: 'מיזוג של מסורות בריאות מזרחיות ומערביות',
      story: {
        title: 'המסע שלנו',
        description: 'שלום נמסטה נולד מהערכה עמוקה למסורות הרוחניות היהודיות וההינדיות, ורצון ליצור מקום שבו החכמה העתיקה הזו יכולה להתאחד בהרמוניה.',
        vision: 'החזון שלנו הוא לספק חוויות טרנספורמטיביות שמגשרות על פערים תרבותיים ומטפחות הבנה בין דרכים רוחניות שונות.'
      },
      team: {
        title: 'הצוות שלנו',
        subtitle: 'הכירו את האנשים מאחורי שלום נמסטה',
        sarah: {
          name: 'שרה כהן',
          role: 'מייסדת ומנהלת רוחנית',
          bio: 'עם למעלה מ-15 שנות ניסיון בתרגולים רוחניים יהודיים ומדיטציה.'
        },
        rajesh: {
          name: 'ראג\'ש שארמה',
          role: 'מנהל יוגה ובריאות',
          bio: 'מדריך יוגה מוסמך עם מומחיות בתרגולים הינדיים מסורתיים.'
        }
      },
      values: {
        title: 'הערכים שלנו',
        subtitle: 'העקרונות שמנחים את כל מה שאנחנו עושים',
        authenticity: {
          title: 'אותנטיות',
          description: 'אנחנו מכבדים ושומרים על שלמות שתי המסורות.'
        },
        community: {
          title: 'קהילה',
          description: 'בניית גשרים בין תרבויות דרך חוויות משותפות.'
        },
        transformation: {
          title: 'טרנספורמציה',
          description: 'יצירת שינוי חיובי מתמשך בחיי האורחים שלנו.'
        }
      }
    },
    packages: {
      title: 'הסדנאות שלנו',
      subtitle: 'בחר את החוויה המושלמת למסע שלך',
      meditation: {
        title: 'סדנת מדיטציה ומיינדפולנס',
        description: 'מסע של שבוע לתוך תרגולי מדיטציה ומיינדפולנס עמוקים.',
        features: [
          'סשנים מונחים יומיים של מדיטציה',
          'סדנאות מיינדפולנס',
          'טיולים בטבע',
          'טקסים מסורתיים',
          'ארוחות צמחוניות בריאות'
        ],
        price: '₪6,999'
      },
      yoga: {
        title: 'סדנת יוגה ובריאות',
        description: 'שנה את הגוף והנפש דרך תרגולי יוגה עתיקים.',
        features: [
          'שיעורי יוגה פעמיים ביום',
          'סדנאות בריאות',
          'טיפולי ספא',
          'פעילויות תרבותיות',
          'ארוחות אורגניות'
        ],
        price: '₪8,499'
      },
      adventure: {
        title: 'סדנת הרפתקה ורוחניות',
        description: 'שלב הרפתקה פיזית עם צמיחה רוחנית.',
        features: [
          'מסעות טיול',
          'סשנים של מדיטציה',
          'טבילה תרבותית',
          'פעילויות הרפתקה',
          'מטבח מקומי'
        ],
        price: '₪9,999'
      },
      faq: {
        title: 'שאלות נפוצות',
        questions: {
          q1: 'מה כלול בחבילות הסדנה?',
          a1: 'כל החבילות כוללות לינה, ארוחות, פעילויות והסעה משדה התעופה.',
          q2: 'האם נדרש ניסיון קודם?',
          a2: 'לא נדרש ניסיון קודם. התוכניות שלנו מתאימות לכל הרמות.',
          q3: 'מה צריך להביא?',
          a3: 'נספק רשימת ציוד מפורטת לאחר ההזמנה.'
        }
      },
      untitled: 'חבילה ללא כותרת',
      noDescription: 'אין תיאור זמין',
      priceOnRequest: 'מחיר לפי בקשה'
    },
    blog: {
      title: 'הבלוג שלנו',
      subtitle: 'תובנות, סיפורים וחכמה מהקהילה שלנו',
      readMore: 'קרא עוד',
      author: {
        bio: 'כותב נלהב ומחפש רוחני המשתף תובנות מהקהילה שלנו.'
      },
      untitled: 'פוסט ללא כותרת',
      noExcerpt: 'אין תקציר זמין',
      noDate: 'תאריך לא זמין'
    },
    contact: {
      title: 'צור קשר',
      subtitle: 'צרו איתנו קשר לכל שאלה לגבי הסדנאות או השירותים שלנו.',
      name: 'שם',
      email: 'אימייל',
      message: 'הודעה',
      send: 'שלח הודעה'
    },
    error: {
      pageNotFound: 'הדף שחיפשת לא קיים.',
      backToHome: 'חזרה לדף הבית'
    }
  }
};

export function t(key: string, lang: Language): string {
  const keys = key.split('.');
  let value: any = translations[lang];
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) {
      return translations['en'][key as keyof Translation] || key;
    }
  }
  
  return value;
} 