namespace AretiVitae2
{
    partial class fGerenciarCompras
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
            this.panel1 = new System.Windows.Forms.Panel();
            this.groupFiltros = new System.Windows.Forms.GroupBox();
            this.cmbStatus = new System.Windows.Forms.ComboBox();
            this.label1 = new System.Windows.Forms.Label();
            this.txtID = new System.Windows.Forms.TextBox();
            this.lblID = new System.Windows.Forms.Label();
            this.cmbAssinatura = new System.Windows.Forms.ComboBox();
            this.lblAssinatura = new System.Windows.Forms.Label();
            this.btnLimpar = new System.Windows.Forms.Button();
            this.btnPesquisar = new System.Windows.Forms.Button();
            this.dgwCompras = new System.Windows.Forms.DataGridView();
            this.lblTitulo2 = new System.Windows.Forms.Label();
            this.lblTitulo = new System.Windows.Forms.Label();
            this.label7 = new System.Windows.Forms.Label();
            this.lblTotalAssinantes = new System.Windows.Forms.Label();
            this.lblHecate = new System.Windows.Forms.Label();
            this.label10 = new System.Windows.Forms.Label();
            this.lblArtemis = new System.Windows.Forms.Label();
            this.label11 = new System.Windows.Forms.Label();
            this.lblSelene = new System.Windows.Forms.Label();
            this.label13 = new System.Windows.Forms.Label();
            this.panel1.SuspendLayout();
            this.groupFiltros.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dgwCompras)).BeginInit();
            this.SuspendLayout();
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.groupFiltros);
            this.panel1.Controls.Add(this.dgwCompras);
            this.panel1.Controls.Add(this.lblTitulo2);
            this.panel1.Controls.Add(this.lblTitulo);
            this.panel1.ForeColor = System.Drawing.SystemColors.ControlText;
            this.panel1.Location = new System.Drawing.Point(12, 12);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(678, 449);
            this.panel1.TabIndex = 38;
            this.panel1.Paint += new System.Windows.Forms.PaintEventHandler(this.panel1_Paint);
            // 
            // groupFiltros
            // 
            this.groupFiltros.Controls.Add(this.cmbStatus);
            this.groupFiltros.Controls.Add(this.label1);
            this.groupFiltros.Controls.Add(this.txtID);
            this.groupFiltros.Controls.Add(this.lblID);
            this.groupFiltros.Controls.Add(this.cmbAssinatura);
            this.groupFiltros.Controls.Add(this.lblAssinatura);
            this.groupFiltros.Controls.Add(this.btnLimpar);
            this.groupFiltros.Controls.Add(this.btnPesquisar);
            this.groupFiltros.Font = new System.Drawing.Font("Josefin Sans Medium", 11.25F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.groupFiltros.Location = new System.Drawing.Point(13, 75);
            this.groupFiltros.Name = "groupFiltros";
            this.groupFiltros.Size = new System.Drawing.Size(650, 127);
            this.groupFiltros.TabIndex = 5;
            this.groupFiltros.TabStop = false;
            this.groupFiltros.Text = "Filtros de Busca";
            // 
            // cmbStatus
            // 
            this.cmbStatus.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.cmbStatus.FormattingEnabled = true;
            this.cmbStatus.Items.AddRange(new object[] {
            "Ativa",
            "Inativa"});
            this.cmbStatus.Location = new System.Drawing.Point(335, 76);
            this.cmbStatus.Name = "cmbStatus";
            this.cmbStatus.Size = new System.Drawing.Size(120, 28);
            this.cmbStatus.TabIndex = 12;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Josefin Sans Medium", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.Location = new System.Drawing.Point(370, 50);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(49, 20);
            this.label1.TabIndex = 11;
            this.label1.Text = "Status:";
            // 
            // txtID
            // 
            this.txtID.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.txtID.Location = new System.Drawing.Point(131, 39);
            this.txtID.Multiline = true;
            this.txtID.Name = "txtID";
            this.txtID.Size = new System.Drawing.Size(87, 25);
            this.txtID.TabIndex = 10;
            // 
            // lblID
            // 
            this.lblID.AutoSize = true;
            this.lblID.Font = new System.Drawing.Font("Josefin Sans Medium", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblID.Location = new System.Drawing.Point(26, 39);
            this.lblID.Name = "lblID";
            this.lblID.Size = new System.Drawing.Size(74, 20);
            this.lblID.TabIndex = 8;
            this.lblID.Text = "ID Usuário:";
            // 
            // cmbAssinatura
            // 
            this.cmbAssinatura.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.cmbAssinatura.FormattingEnabled = true;
            this.cmbAssinatura.Items.AddRange(new object[] {
            "Plano Hécate (R$ 14,00)",
            "Plano Artemis (R$ 25,00)",
            "Plano Selene (R$ 32,00)"});
            this.cmbAssinatura.Location = new System.Drawing.Point(131, 77);
            this.cmbAssinatura.Name = "cmbAssinatura";
            this.cmbAssinatura.Size = new System.Drawing.Size(165, 28);
            this.cmbAssinatura.TabIndex = 7;
            // 
            // lblAssinatura
            // 
            this.lblAssinatura.AutoSize = true;
            this.lblAssinatura.Font = new System.Drawing.Font("Josefin Sans Medium", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblAssinatura.Location = new System.Drawing.Point(26, 80);
            this.lblAssinatura.Name = "lblAssinatura";
            this.lblAssinatura.Size = new System.Drawing.Size(77, 20);
            this.lblAssinatura.TabIndex = 6;
            this.lblAssinatura.Text = "Assinatura: ";
            // 
            // btnLimpar
            // 
            this.btnLimpar.Font = new System.Drawing.Font("Josefin Sans Medium", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnLimpar.Location = new System.Drawing.Point(489, 74);
            this.btnLimpar.Name = "btnLimpar";
            this.btnLimpar.Size = new System.Drawing.Size(142, 31);
            this.btnLimpar.TabIndex = 5;
            this.btnLimpar.Text = "Limpar Filtros";
            this.btnLimpar.UseVisualStyleBackColor = true;
            this.btnLimpar.Click += new System.EventHandler(this.btnLimpar_Click);
            // 
            // btnPesquisar
            // 
            this.btnPesquisar.Font = new System.Drawing.Font("Josefin Sans Medium", 9.75F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnPesquisar.Location = new System.Drawing.Point(489, 39);
            this.btnPesquisar.Name = "btnPesquisar";
            this.btnPesquisar.Size = new System.Drawing.Size(142, 31);
            this.btnPesquisar.TabIndex = 4;
            this.btnPesquisar.Text = "Pesquisar";
            this.btnPesquisar.UseVisualStyleBackColor = true;
            this.btnPesquisar.Click += new System.EventHandler(this.btnPesquisar_Click);
            // 
            // dgwCompras
            // 
            this.dgwCompras.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgwCompras.Location = new System.Drawing.Point(32, 217);
            this.dgwCompras.Name = "dgwCompras";
            this.dgwCompras.Size = new System.Drawing.Size(581, 211);
            this.dgwCompras.TabIndex = 4;
            this.dgwCompras.CellContentClick += new System.Windows.Forms.DataGridViewCellEventHandler(this.dgwCompras_CellContentClick);
            this.dgwCompras.CellFormatting += new System.Windows.Forms.DataGridViewCellFormattingEventHandler(this.dgwCompras_CellFormatting);
            // 
            // lblTitulo2
            // 
            this.lblTitulo2.AutoSize = true;
            this.lblTitulo2.Font = new System.Drawing.Font("Josefin Sans", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblTitulo2.Location = new System.Drawing.Point(240, 10);
            this.lblTitulo2.Name = "lblTitulo2";
            this.lblTitulo2.Size = new System.Drawing.Size(227, 25);
            this.lblTitulo2.TabIndex = 3;
            this.lblTitulo2.Text = "Gerenciamento de Compras";
            // 
            // lblTitulo
            // 
            this.lblTitulo.AutoSize = true;
            this.lblTitulo.Font = new System.Drawing.Font("Josefin Sans", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblTitulo.Location = new System.Drawing.Point(299, 35);
            this.lblTitulo.Name = "lblTitulo";
            this.lblTitulo.Size = new System.Drawing.Size(97, 25);
            this.lblTitulo.TabIndex = 2;
            this.lblTitulo.Text = "Areti Vitae";
            // 
            // label7
            // 
            this.label7.AutoSize = true;
            this.label7.Font = new System.Drawing.Font("Josefin Sans", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label7.Location = new System.Drawing.Point(151, 512);
            this.label7.Name = "label7";
            this.label7.Size = new System.Drawing.Size(159, 25);
            this.label7.TabIndex = 51;
            this.label7.Text = "Total de Assinantes: ";
            // 
            // lblTotalAssinantes
            // 
            this.lblTotalAssinantes.AutoSize = true;
            this.lblTotalAssinantes.Font = new System.Drawing.Font("Josefin Sans", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblTotalAssinantes.Location = new System.Drawing.Point(305, 512);
            this.lblTotalAssinantes.Name = "lblTotalAssinantes";
            this.lblTotalAssinantes.Size = new System.Drawing.Size(22, 25);
            this.lblTotalAssinantes.TabIndex = 52;
            this.lblTotalAssinantes.Text = "_";
            // 
            // lblHecate
            // 
            this.lblHecate.AutoSize = true;
            this.lblHecate.Font = new System.Drawing.Font("Josefin Sans", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblHecate.Location = new System.Drawing.Point(517, 476);
            this.lblHecate.Name = "lblHecate";
            this.lblHecate.Size = new System.Drawing.Size(19, 24);
            this.lblHecate.TabIndex = 54;
            this.lblHecate.Text = "_";
            // 
            // label10
            // 
            this.label10.AutoSize = true;
            this.label10.Font = new System.Drawing.Font("Josefin Sans", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label10.Location = new System.Drawing.Point(395, 476);
            this.label10.Name = "label10";
            this.label10.Size = new System.Drawing.Size(110, 24);
            this.label10.TabIndex = 53;
            this.label10.Text = "Plano Hécate: ";
            // 
            // lblArtemis
            // 
            this.lblArtemis.AutoSize = true;
            this.lblArtemis.Font = new System.Drawing.Font("Josefin Sans", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblArtemis.Location = new System.Drawing.Point(517, 513);
            this.lblArtemis.Name = "lblArtemis";
            this.lblArtemis.Size = new System.Drawing.Size(19, 24);
            this.lblArtemis.TabIndex = 56;
            this.lblArtemis.Text = "_";
            // 
            // label11
            // 
            this.label11.AutoSize = true;
            this.label11.Font = new System.Drawing.Font("Josefin Sans", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label11.Location = new System.Drawing.Point(393, 513);
            this.label11.Name = "label11";
            this.label11.Size = new System.Drawing.Size(113, 24);
            this.label11.TabIndex = 55;
            this.label11.Text = "Plano Ártemis: ";
            // 
            // lblSelene
            // 
            this.lblSelene.AutoSize = true;
            this.lblSelene.Font = new System.Drawing.Font("Josefin Sans", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblSelene.Location = new System.Drawing.Point(517, 550);
            this.lblSelene.Name = "lblSelene";
            this.lblSelene.Size = new System.Drawing.Size(19, 24);
            this.lblSelene.TabIndex = 58;
            this.lblSelene.Text = "_";
            // 
            // label13
            // 
            this.label13.AutoSize = true;
            this.label13.Font = new System.Drawing.Font("Josefin Sans", 11.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label13.Location = new System.Drawing.Point(395, 549);
            this.label13.Name = "label13";
            this.label13.Size = new System.Drawing.Size(106, 24);
            this.label13.TabIndex = 57;
            this.label13.Text = "Plano Selene: ";
            // 
            // fGerenciarCompras
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(702, 605);
            this.Controls.Add(this.lblSelene);
            this.Controls.Add(this.label13);
            this.Controls.Add(this.lblArtemis);
            this.Controls.Add(this.label11);
            this.Controls.Add(this.lblHecate);
            this.Controls.Add(this.label10);
            this.Controls.Add(this.lblTotalAssinantes);
            this.Controls.Add(this.label7);
            this.Controls.Add(this.panel1);
            this.Name = "fGerenciarCompras";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Gerenciar Compras";
            this.Load += new System.EventHandler(this.fGerenciarCompras_Load);
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.groupFiltros.ResumeLayout(false);
            this.groupFiltros.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dgwCompras)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Label lblTitulo2;
        private System.Windows.Forms.Label lblTitulo;
        private System.Windows.Forms.DataGridView dgwCompras;
        private System.Windows.Forms.GroupBox groupFiltros;
        private System.Windows.Forms.ComboBox cmbAssinatura;
        private System.Windows.Forms.Label lblAssinatura;
        private System.Windows.Forms.Button btnLimpar;
        private System.Windows.Forms.Button btnPesquisar;
        private System.Windows.Forms.Label label7;
        private System.Windows.Forms.Label lblTotalAssinantes;
        private System.Windows.Forms.Label lblHecate;
        private System.Windows.Forms.Label label10;
        private System.Windows.Forms.Label lblArtemis;
        private System.Windows.Forms.Label label11;
        private System.Windows.Forms.Label lblSelene;
        private System.Windows.Forms.Label label13;
        private System.Windows.Forms.Label lblID;
        private System.Windows.Forms.TextBox txtID;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.ComboBox cmbStatus;
    }
}