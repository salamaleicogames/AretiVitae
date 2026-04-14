using System;
using System.ComponentModel;
using System.Drawing;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Tela_Admin
{
    /// <summary>
    /// Formulário "Sobre".
    /// Responsável por exibir informações do sistema, como nome do produto,
    /// versão, descrição, empresa e direitos autorais, utilizando dados do Assembly.
    /// </summary>
    partial class fSobreNos : Form
    {
        /// <summary>
        /// Construtor do formulário.
        /// Inicializa os componentes e carrega as informações do Assembly
        /// para exibição na tela.
        /// </summary>
        public fSobreNos()
        {
            InitializeComponent();

            this.Text = String.Format("Sobre {0}", AssemblyTitle);
            this.labelProductName.Text = AssemblyProduct;
            this.labelVersion.Text = String.Format("Versão {0}", AssemblyVersion);
            this.labelCopyright.Text = AssemblyCopyright;
            this.labelCompanyName.Text = AssemblyCompany;
            this.textBoxDescription.Text = AssemblyDescription;
        }

        #region Acessório de Atributos do Assembly

        /// <summary>
        /// Obtém o título do aplicativo a partir dos atributos do Assembly.
        /// </summary>
        public string AssemblyTitle
        {
            get
            {
                object[] attributes = Assembly.GetExecutingAssembly()
                    .GetCustomAttributes(typeof(AssemblyTitleAttribute), false);

                if (attributes.Length > 0)
                {
                    AssemblyTitleAttribute titleAttribute =
                        (AssemblyTitleAttribute)attributes[0];

                    if (titleAttribute.Title != "")
                        return titleAttribute.Title;
                }

                return System.IO.Path.GetFileNameWithoutExtension(
                    Assembly.GetExecutingAssembly().CodeBase);
            }
        }

        /// <summary>
        /// Obtém a versão atual do aplicativo.
        /// </summary>
        public string AssemblyVersion
        {
            get
            {
                return Assembly.GetExecutingAssembly()
                    .GetName().Version.ToString();
            }
        }

        /// <summary>
        /// Obtém a descrição do aplicativo definida no Assembly.
        /// </summary>
        public string AssemblyDescription
        {
            get
            {
                object[] attributes =
                    Assembly.GetExecutingAssembly()
                    .GetCustomAttributes(typeof(AssemblyDescriptionAttribute), false);

                if (attributes.Length == 0)
                    return "";

                return ((AssemblyDescriptionAttribute)attributes[0]).Description;
            }
        }

        /// <summary>
        /// Obtém o nome do produto definido no Assembly.
        /// </summary>
        public string AssemblyProduct
        {
            get
            {
                object[] attributes =
                    Assembly.GetExecutingAssembly()
                    .GetCustomAttributes(typeof(AssemblyProductAttribute), false);

                if (attributes.Length == 0)
                    return "";

                return ((AssemblyProductAttribute)attributes[0]).Product;
            }
        }

        /// <summary>
        /// Obtém as informações de direitos autorais do aplicativo.
        /// </summary>
        public string AssemblyCopyright
        {
            get
            {
                object[] attributes =
                    Assembly.GetExecutingAssembly()
                    .GetCustomAttributes(typeof(AssemblyCopyrightAttribute), false);

                if (attributes.Length == 0)
                    return "";

                return ((AssemblyCopyrightAttribute)attributes[0]).Copyright;
            }
        }

        /// <summary>
        /// Obtém o nome da empresa definido no Assembly.
        /// </summary>
        public string AssemblyCompany
        {
            get
            {
                object[] attributes =
                    Assembly.GetExecutingAssembly()
                    .GetCustomAttributes(typeof(AssemblyCompanyAttribute), false);

                if (attributes.Length == 0)
                    return "";

                return ((AssemblyCompanyAttribute)attributes[0]).Company;
            }
        }

        #endregion

        /// <summary>
        /// Evento do botão OK.
        /// Fecha o formulário "Sobre".
        /// </summary>
        private void okButton_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        /// <summary>
        /// Evento executado ao carregar o formulário.
        /// </summary>
        private void fSobreNos_Load(object sender, EventArgs e)
        {
        }
    }
}
