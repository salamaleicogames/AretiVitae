using MySql.Data.MySqlClient;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace AretiVitae2
{
    /// <summary>
    /// Tela de Gerenciamento dos Usuários cadastrados na plataforma Areti Vitae
    /// </summary>
    
    public partial class fListaUsuarios : Form
    {
        #region Estilização dos Componentes Visuais
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

        int filtroId = 0;
        int filtroIdInativo = 0;
        public fListaUsuarios()
        {
            InitializeComponent();

            //Estilização de Background
            BackColor = System.Drawing.Color.FromArgb(12, 27, 60);

            //Estilização dos Componentes
            lblTitulo.ForeColor = System.Drawing.Color.White;
            lblTitulo2.ForeColor = System.Drawing.Color.White;
            lblLegenda.ForeColor = System.Drawing.Color.White;


            //Estilização dos Botões
            btnHome.BackColor = Color.FromArgb(130, 151, 217);
            btnHome.ForeColor = Color.FromArgb(12, 27, 60);
            btnHome.Region = Region.FromHrgn(
                CreateRoundRectRgn(0, 0, btnHome.Width, btnHome.Height, 20, 20)
            );
            #endregion
        }

        private void fListaUsuarios_Load(object sender, EventArgs e)
        {
            int.TryParse(txtID.Text, out filtroId);

            int.TryParse(txtIDInativo.Text, out filtroIdInativo);

            int status = (tabUsuarios.SelectedIndex == 0) ? 0 : 1;
            if (status == 0)
            {
                carregarUsuarios(status,filtroId , txtNome.Text, txtRegistro.Text, cmbAssinatura.SelectedIndex);
            }
            else
            {
                carregarUsuarios(status, filtroIdInativo, txtNome.Text, txtRegistroInativo.Text, cmbAssinaturaInativo.SelectedIndex);
            }
        }


        #region Método de Carregamento da Tabela (filtros e estatísticas)
        /// <summary>
        /// Método de abertura da listagem dos Usuários cadastrados (DatagGridView) e exibição de estatísticas de cadastro de usuários
        /// </summary>
        private void carregarUsuarios(int ativo, int filtroId, string filtroNome, string filtroCPF, int filtroAssinatura)
        {
            try
            {
                if (DAO_Conexao.con.State != System.Data.ConnectionState.Open)
                {
                    DAO_Conexao.con.Open();
                }


                string query = "SELECT id, username, idade, email, tipoRegistro, registro, ativo FROM AretiVitae_Usuario WHERE ativo = " + ativo;

                //Filtros de Nome, Registro (CPF/CNPJ) e Assinatura (Usuários Ativos)

                if (filtroId > 0)
                {
                    query += " AND id = " + filtroId;
                }

                if (!string.IsNullOrEmpty(filtroNome))
                {
                    query += " AND username LIKE '%" + filtroNome + "%'";
                }

                if (!string.IsNullOrEmpty(filtroCPF))
                {
                    query += " AND registro LIKE '%" + filtroCPF + "%'";
                }

                if (filtroAssinatura >= 0)
                {
                    query += " AND assinatura = " + filtroAssinatura;
                }



                // Queries de contagem
                string usersTotal = "SELECT COUNT(*) FROM AretiVitae_Usuario";
                string usersAtivos = "SELECT COUNT(*) FROM AretiVitae_Usuario WHERE ativo = 0";
                string usersDesativados = "SELECT COUNT(*) FROM AretiVitae_Usuario WHERE ativo = 1";


                MySqlDataAdapter adapter = new MySqlDataAdapter(query, DAO_Conexao.con);

                MySqlCommand cmd1 = new MySqlCommand(usersTotal, DAO_Conexao.con);
                int totalUsers = Convert.ToInt32(cmd1.ExecuteScalar());

                MySqlCommand cmd2 = new MySqlCommand(usersAtivos, DAO_Conexao.con);
                int ativosUsers = Convert.ToInt32(cmd2.ExecuteScalar());

                MySqlCommand cmd3 = new MySqlCommand(usersDesativados, DAO_Conexao.con);
                int desativadosUsers = Convert.ToInt32(cmd3.ExecuteScalar());

                // Estatísticas de Usuários
                lblUsersTotal.Text = totalUsers.ToString();
                lblUsersAtivos.Text = ativosUsers.ToString();
                lblUsersInativos.Text = desativadosUsers.ToString();

                // Grid
                DataTable dt = new DataTable();
                adapter.Fill(dt);

                dt.Columns.Add("assinatura", typeof(string));

                foreach (DataRow row in dt.Rows)
                {
                    string idUsuario = row["id"].ToString();
                    string queryAssinatura = "SELECT plano FROM AretiVitae_Compra WHERE id_usuario = " + idUsuario;

                    MySqlCommand cmdAssinatura = new MySqlCommand(queryAssinatura, DAO_Conexao.con);
                    object resultado = cmdAssinatura.ExecuteScalar();

                    if (resultado != null && resultado != DBNull.Value)
                    {
                        int plano = Convert.ToInt32(resultado);

                        if (plano == 1)
                        {
                            row["assinatura"] = "Plano Hécate";
                        }
                        else if (plano == 2)
                        {
                            row["assinatura"] = "Plano Ártemis";
                        }
                        else if (plano == 3)
                        {
                            row["assinatura"] = "Plano Selene";
                        }
                        else
                        {
                            row["assinatura"] = "Plano Free";
                        }
                    }
                    else
                    {
                        row["assinatura"] = "Plano Free";
                    }
                }

                DataGridView dgwAtual = (ativo == 0) ? dgwAtivos : dgwInativos;
                dgwAtual.DataSource = dt;


                if (ativo == 1)
                {
                    if (!dgwAtual.Columns.Contains("btnReativar"))
                    {
                        DataGridViewButtonColumn btn = new DataGridViewButtonColumn();
                        btn.Name = "btnReativar";
                        btn.HeaderText = "Ações";
                        btn.Text = "Reativar";
                        btn.UseColumnTextForButtonValue = true;
                        dgwAtual.Columns.Add(btn);
                    }
                }

                // Aplicar cores de acordo com o plano (apenas na célula da assinatura)
                foreach (DataGridViewRow row in dgwAtual.Rows)
                {
                    if (row.Cells["assinatura"].Value != null)
                    {
                        string plano = row.Cells["assinatura"].Value.ToString();

                        if (plano == "Plano Hécate")
                        {
                            row.Cells["assinatura"].Style.BackColor = Color.LawnGreen;
                            row.Cells["assinatura"].Style.ForeColor = Color.Black;
                        }
                        else if (plano == "Plano Ártemis")
                        {
                            row.Cells["assinatura"].Style.BackColor = Color.Yellow;
                            row.Cells["assinatura"].Style.ForeColor = Color.Black;
                        }
                        else if (plano == "Plano Selene")
                        {
                            row.Cells["assinatura"].Style.BackColor = Color.DarkBlue;
                            row.Cells["assinatura"].Style.ForeColor = Color.White;
                        }
                    }
                }

                // Cabeçalhos da tabela
                dgwAtual.Columns["id"].HeaderText = "ID";
                dgwAtual.Columns["username"].HeaderText = "Username";
                dgwAtual.Columns["idade"].HeaderText = "Idade";
                dgwAtual.Columns["email"].HeaderText = "E-mail";
                dgwAtual.Columns["assinatura"].HeaderText = "Assinatura";
                dgwAtual.Columns["tipoRegistro"].HeaderText = "Tipo de Registro";
                dgwAtual.Columns["registro"].HeaderText = "Registro";
                dgwAtual.Columns["ativo"].HeaderText = "Status";
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
        #endregion

        private void btnHome_Click(object sender, EventArgs e)
        {
            this.Close();
        }

        private void dgwInativos_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
            if (dgwInativos.Columns[e.ColumnIndex].Name == "btnReativar" && e.RowIndex >= 0)
            {
                // Verifica se clicou no botão Reativar
                if (dgwInativos.Columns[e.ColumnIndex].Name == "btnReativar" && e.RowIndex >= 0)
                {
                    DataGridViewRow linha = dgwInativos.Rows[e.RowIndex];

                    //Captação dos dados da tabela
                    string username = linha.Cells["username"].Value.ToString();
                    int idade = Convert.ToInt32(linha.Cells["idade"].Value);
                    string email = linha.Cells["email"].Value.ToString();
                    int assinatura = 0;
                    if (linha.Cells["assinatura"].Value == "Plano Hécate")
                    {
                        assinatura = 1;
                    }
                    else if(linha.Cells["assinatura"].Value == "Plano Ártemis")
                    {
                        assinatura = 2;
                    }
                    else if(linha.Cells["assinatura"].Value == "Plano Selene")
                    {
                        assinatura = 3;
                    }
                    else
                    {
                        assinatura = 0;
                    }


                    // Busca os dados extras no banco (registro e tipoRegistro)
                    Usuario user = new Usuario();
                    string tRegistro, registro;
                    user.BuscarRegistroUsuario(username, out tRegistro, out registro);

                    //Tratamento das variáveis caso o usuário ter o plano free
                    if (string.IsNullOrEmpty(tRegistro)) tRegistro = "";
                    if (string.IsNullOrEmpty(registro)) registro = "";


                    bool sucesso = user.AtualizarUsuarioS(username, idade, email, tRegistro, registro, 0);

                    if (sucesso)
                    {
                        MessageBox.Show("Usuário reativado!");


                        int status = (tabUsuarios.SelectedIndex == 0) ? 0 : 1;
                        if (status == 0)
                        {
                            carregarUsuarios(status, filtroId, txtNome.Text, txtRegistro.Text, cmbAssinatura.SelectedIndex);
                        }
                        else
                        {
                            carregarUsuarios(status, filtroIdInativo, txtNome.Text, txtRegistroInativo.Text, cmbAssinaturaInativo.SelectedIndex);
                        }
                    }
                }
            }
        }

        private void tabUsuarios_SelectedIndexChanged(object sender, EventArgs e)
        {
            int status = (tabUsuarios.SelectedIndex == 0) ? 0 : 1;
            if (status == 0)
            {
                carregarUsuarios(status, filtroId, txtNome.Text, txtRegistro.Text, cmbAssinatura.SelectedIndex);
            }
            else
            {
                carregarUsuarios(status, filtroIdInativo, txtNome.Text, txtRegistroInativo.Text, cmbAssinaturaInativo.SelectedIndex);
            }
        }

        private void dgwAtivos_CellContentClick(object sender, DataGridViewCellEventArgs e)
        {
           
        }

        private void dgwAtivos_CellFormatting(object sender, DataGridViewCellFormattingEventArgs e)
        {
            DataGridView dgw = (DataGridView)sender;

            //Verifica se a coluna "ativo" existe no grid antes do acesso
            if (dgw.Columns.Contains("ativo") && e.ColumnIndex == dgw.Columns["ativo"].Index)
            {
                if (e.Value != null)
                {
                    string status = e.Value.ToString();

                    if (status == "0")
                    {
                        e.CellStyle.BackColor = Color.LightGreen;
                        e.CellStyle.ForeColor = Color.Black;
                        e.Value = "Ativo";
                    }
                    else if (status == "1")
                    {
                        e.CellStyle.BackColor = Color.Salmon;
                        e.CellStyle.ForeColor = Color.White;
                        e.Value = "Desativado";
                    }
                }
            }

            //Verifica se a coluna "assinatura" existe no grid antes do acesso
            if (dgw.Columns.Contains("assinatura") && e.ColumnIndex == dgw.Columns["assinatura"].Index)
            {
                if (e.Value != null)
                {
                    string assinatura = e.Value.ToString();

                    if (assinatura == "0")
                    {
                        e.CellStyle.BackColor = Color.LightGreen;
                        e.CellStyle.ForeColor = Color.Black;
                        e.Value = "Plano Free";
                    }
                    else if (assinatura == "1")
                    {
                        e.CellStyle.BackColor = Color.LightCyan;
                        e.CellStyle.ForeColor = Color.Black;
                        e.Value = "Plano Hécate";
                    }
                    else if (assinatura == "2")
                    {
                        e.CellStyle.BackColor = Color.LightPink;
                        e.CellStyle.ForeColor = Color.Black;
                        e.Value = "Plano Ártemis";
                    }
                    else if (assinatura == "3")
                    {
                        e.CellStyle.BackColor = Color.LightSalmon;
                        e.CellStyle.ForeColor = Color.Black;
                        e.Value = "Plano Selene";
                    }
                }
            }
        }

        private void dgwInativos_CellFormatting(object sender, DataGridViewCellFormattingEventArgs e)
        {
            DataGridView dgw = (DataGridView)sender;

            // Verifica se a coluna "ativo" existe no grid antes do acesso
            if (dgw.Columns.Contains("ativo") && e.ColumnIndex == dgw.Columns["ativo"].Index)
            {
                if (e.Value != null)
                {
                    string status = e.Value.ToString();

                    if (status == "0")
                    {
                        e.CellStyle.BackColor = Color.LightGreen;
                        e.CellStyle.ForeColor = Color.Black;
                        e.Value = "Ativo";
                    }
                    else if (status == "1")
                    {
                        e.CellStyle.BackColor = Color.Salmon;
                        e.CellStyle.ForeColor = Color.White;
                        e.Value = "Desativado";
                    }
                }
            }

            //Verifica se a coluna "assinatura" existe no grid antes do acesso
            if (dgw.Columns.Contains("assinatura") && e.ColumnIndex == dgw.Columns["assinatura"].Index)
            {
                if (e.Value != null)
                {
                    string assinatura = e.Value.ToString();

                    if (assinatura == "0")
                    {
                        e.CellStyle.BackColor = Color.LightGreen;
                        e.CellStyle.ForeColor = Color.Black;
                        e.Value = "Plano Free";
                    }
                    else if (assinatura == "1")
                    {
                        e.CellStyle.BackColor = Color.LightCyan;
                        e.CellStyle.ForeColor = Color.Black;
                        e.Value = "Network";
                    }
                }
            }
        }

        private void btnPesquisarInativo_Click(object sender, EventArgs e)
        {
            if (!string.IsNullOrWhiteSpace(txtIDInativo.Text))
            {
                int.TryParse(txtIDInativo.Text, out filtroIdInativo);
            }
            else
            {
                filtroIdInativo = 0;
            }

            carregarUsuarios(1, filtroIdInativo, txtNomeInativo.Text, txtRegistroInativo.Text, cmbAssinaturaInativo.SelectedIndex);
        }

        private void btnPesquisar_Click(object sender, EventArgs e)
        {
            if (!string.IsNullOrWhiteSpace(txtID.Text))
            {
                int.TryParse(txtID.Text, out filtroId);
            }
            else
            {
                filtroId = 0;
            }

            carregarUsuarios(0, filtroId, txtNome.Text, txtRegistro.Text, cmbAssinatura.SelectedIndex);
        }

        private void btnLimpar_Click(object sender, EventArgs e)
        {
            txtNome.Clear();
            txtRegistro.Clear();
            cmbAssinatura.SelectedIndex = -1;

            txtID.Clear();

            carregarUsuarios(0, 0, txtNome.Text, txtRegistro.Text, cmbAssinatura.SelectedIndex);
        }

        private void btnLimparInativo_Click(object sender, EventArgs e)
        {
            txtNomeInativo.Clear();
            txtRegistroInativo.Clear();
            cmbAssinaturaInativo.SelectedIndex = -1;

            txtIDInativo.Clear();

            carregarUsuarios(1, 0, txtNome.Text, txtRegistro.Text, cmbAssinatura.SelectedIndex);
        }

        private void groupFiltrosAtivo_Enter(object sender, EventArgs e)
        {

        }

        private void panel1_Paint(object sender, PaintEventArgs e)
        {

        }

        private void cmbAssinatura_SelectedIndexChanged(object sender, EventArgs e)
        {

        }
    }
}
