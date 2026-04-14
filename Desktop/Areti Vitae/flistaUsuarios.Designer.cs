namespace Tela_Admin
{
    partial class flistaUsuarios
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(flistaUsuarios));
            this.dgwUsuarios = new System.Windows.Forms.DataGridView();
            this.lblTitulo = new System.Windows.Forms.Label();
            this.lblLegenda = new System.Windows.Forms.Label();
            this.lblLegAssinatura = new System.Windows.Forms.Label();
            this.lblLegAtivo = new System.Windows.Forms.Label();
            this.panel1 = new System.Windows.Forms.Panel();
            this.lblTitulo2 = new System.Windows.Forms.Label();
            this.lblDescricao2 = new System.Windows.Forms.Label();
            this.btnHome = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.dgwUsuarios)).BeginInit();
            this.panel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // dgwUsuarios
            // 
            this.dgwUsuarios.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgwUsuarios.Location = new System.Drawing.Point(18, 87);
            this.dgwUsuarios.Name = "dgwUsuarios";
            this.dgwUsuarios.Size = new System.Drawing.Size(596, 214);
            this.dgwUsuarios.TabIndex = 1;
            // 
            // lblTitulo
            // 
            this.lblTitulo.AutoSize = true;
            this.lblTitulo.Font = new System.Drawing.Font("Josefin Sans", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblTitulo.Location = new System.Drawing.Point(269, 48);
            this.lblTitulo.Name = "lblTitulo";
            this.lblTitulo.Size = new System.Drawing.Size(97, 25);
            this.lblTitulo.TabIndex = 2;
            this.lblTitulo.Text = "Areti Vitae";
            // 
            // lblLegenda
            // 
            this.lblLegenda.AutoSize = true;
            this.lblLegenda.Font = new System.Drawing.Font("Josefin Sans", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblLegenda.Location = new System.Drawing.Point(15, 351);
            this.lblLegenda.Name = "lblLegenda";
            this.lblLegenda.Size = new System.Drawing.Size(55, 18);
            this.lblLegenda.TabIndex = 3;
            this.lblLegenda.Text = "Legenda:";
            // 
            // lblLegAssinatura
            // 
            this.lblLegAssinatura.AutoSize = true;
            this.lblLegAssinatura.Font = new System.Drawing.Font("Josefin Sans", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblLegAssinatura.Location = new System.Drawing.Point(15, 369);
            this.lblLegAssinatura.Name = "lblLegAssinatura";
            this.lblLegAssinatura.Size = new System.Drawing.Size(240, 18);
            this.lblLegAssinatura.TabIndex = 4;
            this.lblLegAssinatura.Text = "Assinatura:     0 - Plano Free;   1 - Plano Network";
            // 
            // lblLegAtivo
            // 
            this.lblLegAtivo.AutoSize = true;
            this.lblLegAtivo.Font = new System.Drawing.Font("Josefin Sans", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblLegAtivo.Location = new System.Drawing.Point(15, 389);
            this.lblLegAtivo.Name = "lblLegAtivo";
            this.lblLegAtivo.Size = new System.Drawing.Size(250, 18);
            this.lblLegAtivo.TabIndex = 5;
            this.lblLegAtivo.Text = "Ativo:     0 - Usuário ativo,   1 - Usuário Desativado";
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.lblTitulo2);
            this.panel1.Controls.Add(this.lblTitulo);
            this.panel1.Controls.Add(this.dgwUsuarios);
            this.panel1.Location = new System.Drawing.Point(18, 12);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(642, 314);
            this.panel1.TabIndex = 6;
            // 
            // lblTitulo2
            // 
            this.lblTitulo2.AutoSize = true;
            this.lblTitulo2.Font = new System.Drawing.Font("Josefin Sans", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblTitulo2.Location = new System.Drawing.Point(253, 23);
            this.lblTitulo2.Name = "lblTitulo2";
            this.lblTitulo2.Size = new System.Drawing.Size(145, 25);
            this.lblTitulo2.TabIndex = 3;
            this.lblTitulo2.Text = "Lista de Usuários";
            // 
            // lblDescricao2
            // 
            this.lblDescricao2.Font = new System.Drawing.Font("Josefin Sans", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblDescricao2.ForeColor = System.Drawing.Color.White;
            this.lblDescricao2.Location = new System.Drawing.Point(290, 354);
            this.lblDescricao2.Name = "lblDescricao2";
            this.lblDescricao2.Size = new System.Drawing.Size(185, 55);
            this.lblDescricao2.TabIndex = 28;
            this.lblDescricao2.Text = "O username e o email são únicos,\nnão é possível ter mais de uma\nconta com ambos o" +
    "s dados iguais";
            // 
            // btnHome
            // 
            this.btnHome.Font = new System.Drawing.Font("Josefin Sans", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnHome.Location = new System.Drawing.Point(510, 369);
            this.btnHome.Name = "btnHome";
            this.btnHome.Size = new System.Drawing.Size(150, 26);
            this.btnHome.TabIndex = 29;
            this.btnHome.Text = "Início";
            this.btnHome.UseVisualStyleBackColor = true;
            this.btnHome.Click += new System.EventHandler(this.button1_Click);
            // 
            // flistaUsuarios
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(673, 461);
            this.Controls.Add(this.btnHome);
            this.Controls.Add(this.lblDescricao2);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.lblLegAtivo);
            this.Controls.Add(this.lblLegAssinatura);
            this.Controls.Add(this.lblLegenda);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "flistaUsuarios";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Lista de Usuários";
            this.Load += new System.EventHandler(this.listaUsuarios_Load);
            ((System.ComponentModel.ISupportInitialize)(this.dgwUsuarios)).EndInit();
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.DataGridView dgwUsuarios;
        private System.Windows.Forms.Label lblTitulo;
        private System.Windows.Forms.Label lblLegenda;
        private System.Windows.Forms.Label lblLegAssinatura;
        private System.Windows.Forms.Label lblLegAtivo;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Label lblDescricao2;
        private System.Windows.Forms.Button btnHome;
        private System.Windows.Forms.Label lblTitulo2;
    }
}