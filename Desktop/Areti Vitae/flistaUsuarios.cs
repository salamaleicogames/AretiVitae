using MySql.Data.MySqlClient;
using System;
using System.Data;
using System.Drawing;
using System.Windows.Forms;

/// <summary>
/// Tela de Gerenciamento dos Usuários cadastrados na plataforma Areti Vitae
/// </summary>
namespace Tela_Admin
{
    public partial class flistaUsuarios : Form
    {

        #region Estilização de Componentes Visuais

        /// <summary>
        /// Importação da função CreateRoundRectRgn da biblioteca Gdi32.dll para criação de bordas arredondadas em botões.
        /// </summary>
        [System.Runtime.InteropServices.DllImport("Gdi32.dll", EntryPoint = "CreateRoundRectRgn")]
        private static extern IntPtr CreateRoundRectRgn(
            int nLeftRect,
            int nTopRect,
            int nRightRect,
            int nBottomRect,
            int nWidthEllipse,
            int nHeightEllipse
        );
        public flistaUsuarios()
        {
            InitializeComponent();

            //Estilização de Background
            BackColor = System.Drawing.Color.FromArgb(12, 27, 60);

            //Estilização dos Componentes
            lblTitulo.ForeColor = System.Drawing.Color.White;
            lblTitulo2.ForeColor = System.Drawing.Color.White;
            lblLegenda.ForeColor = System.Drawing.Color.White;
            lblLegAssinatura.ForeColor = System.Drawing.Color.White;
            lblLegAtivo.ForeColor = System.Drawing.Color.White;
            lblDescricao2.ForeColor = System.Drawing.Color.White;

            //Estilização dos Botões
            btnHome.BackColor = Color.FromArgb(130, 151, 217);
            btnHome.ForeColor = Color.FromArgb(12, 27, 60);
            btnHome.Region = Region.FromHrgn(
                CreateRoundRectRgn(0, 0, btnHome.Width, btnHome.Height, 20, 20)
            );
        }
        #endregion


        //Chamada de Método de abertura da listagem dos Usuários cadastrados
        private void listaUsuarios_Load(object sender, EventArgs e)
        {
            CarregarUsuarios();
        }

        /// <summary>
        /// Método de abertura da listagem dos Usuários cadastrados (DatagGridView)
        /// </summary>
        private void CarregarUsuarios()
        {
            try
            {
                // Abertura de Conexão com o BD
                if (DAO_Conexao.con.State != System.Data.ConnectionState.Open)
                {
                    DAO_Conexao.con.Open();
                }

                string query = "SELECT * FROM AretiVitae_Usuario"; // Query de consulta no Banco de Dados
                MySqlDataAdapter adapter = new MySqlDataAdapter(query, DAO_Conexao.con);
                DataTable dt = new DataTable();
                adapter.Fill(dt);

                dgwUsuarios.DataSource = dt; // Preenchimento do DataGridView


                //Renomeando títulos das colunas
                dgwUsuarios.Columns["id"].HeaderText = "ID";
                dgwUsuarios.Columns["username"].HeaderText = "Username";
                dgwUsuarios.Columns["idade"].HeaderText = "Idade";
                dgwUsuarios.Columns["email"].HeaderText = "E-mail";
                dgwUsuarios.Columns["senha"].HeaderText = "Senha";
                dgwUsuarios.Columns["cod_tree"].HeaderText = "Cod.Tree (Árvore)";
                dgwUsuarios.Columns["assinatura"].HeaderText = "Assinatura";


                #region Estilização do Data Grid View
                //Estilização das colunas do DataGridView
                dgwUsuarios.AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.Fill;
                dgwUsuarios.ColumnHeadersDefaultCellStyle.Font = new Font("Josefin Sans", 10, FontStyle.Bold);
                dgwUsuarios.ColumnHeadersDefaultCellStyle.BackColor = Color.FromArgb(130, 151, 217);
                dgwUsuarios.ColumnHeadersDefaultCellStyle.ForeColor = Color.White;
                dgwUsuarios.EnableHeadersVisualStyles = false;
                dgwUsuarios.DefaultCellStyle.BackColor = Color.White;
                dgwUsuarios.DefaultCellStyle.ForeColor = Color.Black;
                dgwUsuarios.AlternatingRowsDefaultCellStyle.BackColor = Color.FromArgb(230, 235, 250);
                #endregion
            }
            catch (Exception ex)
            {
                MessageBox.Show("Erro ao carregar usuários: " + ex.Message);
            }
            finally
            {
                DAO_Conexao.con.Close();
            }
        }

        private void button1_Click(object sender, EventArgs e)
        {
            this.Close();
        }
    }
}
