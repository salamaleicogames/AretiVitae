using MySql.Data.MySqlClient;
using System;
using System.Data;
using System.Drawing;
using System.Windows.Forms;

/// <summary>
/// Tela de Gerenciamento e Listagem de Usuários Administradores da plataforma Areti Vitae
/// Restito a Administradores do tipo 'Builder'
/// </summary>
namespace Tela_Admin
{
    public partial class listaUsuariosADM : Form
    {
        public listaUsuariosADM()
        {
            InitializeComponent();
        }

        /// <summary>
        /// Método de Carregamento do Formulário
        /// </summary>
        /// <param name="sender"></param>
        /// <param name="e"></param>
        private void listaUsuariosADM_Load(object sender, EventArgs e)
        {
            //Chamada de método de carregamento da Lista de Usuários Administradores
            carregarUsuarios();

            #region Estilização dos Componentes Visuais
            //Estilização de Background
            BackColor = System.Drawing.Color.FromArgb(12, 27, 60);

            //Estilização de outros Componentes
            lblTitulo.ForeColor = System.Drawing.Color.White;
            lblSubtitulo.ForeColor = System.Drawing.Color.White;
            lblLegenda.ForeColor = System.Drawing.Color.White;
            lblLegAssinatura.ForeColor = System.Drawing.Color.White;
            lblDescricao2.ForeColor = System.Drawing.Color.White;
            #endregion
        }

        /// <summary>
        //  Método de carregamento da Lista de Usuários Administradores
        /// </summary>
        private void carregarUsuarios()
        {
            try
            {
                // Abertura de Conexão com o BD
                if (DAO_Conexao.con.State != System.Data.ConnectionState.Open)
                {
                    DAO_Conexao.con.Open();
                }

                string query = "SELECT * FROM AretiVitae_Admin"; // Query de busca no Banco de Dados
                MySqlDataAdapter adapter = new MySqlDataAdapter(query, DAO_Conexao.con);
                DataTable dt = new DataTable();
                adapter.Fill(dt);

                dgwUsuariosADM.DataSource = dt; // Preenchimento do DataGridView


                //Renomeando títulos das colunas
                dgwUsuariosADM.Columns["id"].HeaderText = "ID";
                dgwUsuariosADM.Columns["usuario"].HeaderText = "Usuário";
                dgwUsuariosADM.Columns["senha"].HeaderText = "Senha";
                dgwUsuariosADM.Columns["tipo"].HeaderText = "Tipo";

                #region Estilização do DataGridView
                //Estilização das colunas do DataGridView
                dgwUsuariosADM.AutoSizeColumnsMode = DataGridViewAutoSizeColumnsMode.Fill;
                dgwUsuariosADM.ColumnHeadersDefaultCellStyle.Font = new Font("Josefin Sans", 10, FontStyle.Bold);
                dgwUsuariosADM.ColumnHeadersDefaultCellStyle.BackColor = Color.FromArgb(130, 151, 217);
                dgwUsuariosADM.ColumnHeadersDefaultCellStyle.ForeColor = Color.White;
                dgwUsuariosADM.EnableHeadersVisualStyles = false;
                dgwUsuariosADM.DefaultCellStyle.BackColor = Color.White;
                dgwUsuariosADM.DefaultCellStyle.ForeColor = Color.Black;
                dgwUsuariosADM.AlternatingRowsDefaultCellStyle.BackColor = Color.FromArgb(230, 235, 250);
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
    }
}
