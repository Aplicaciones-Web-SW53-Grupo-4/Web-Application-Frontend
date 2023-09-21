import { createI18n } from "vue-i18n";

const i18n = createI18n({
    locale: "en",
    messages: {
        es: {
            about: "Acerca de",
            copyright: "Derechos de autor",
            announcement:"Covocatoria Laboral",
            titles:"Titulo",
            companyname:"Nombre de Compañia",
            categorys:"Categoria",
            salary:"Salario",
            publicationdate:"Fecha de Publicacion",
            descriptions:"Descripcion",
        },
        en: {
            about: "About",
            copyright: "Copyright ",
            announcement:"Labor Call",
            titles:"Title",
            companyname:"Company Name",
            categorys:"Category",
            salary:"Salary",
            publicationdate:"Publication Date",
            descriptions:"Description",
        },
        fr: {
            about: "À propos ",
            copyright: "Appel de travail'",
            titles:"Qualification",
            companyname:"Nom de l'entreprise",
            categorys:"Catégorie",
            salary:"Salaire",
            publicationdate:"Date de publication",
            descriptions:"Description",
        },
    },
});

export default i18n;
