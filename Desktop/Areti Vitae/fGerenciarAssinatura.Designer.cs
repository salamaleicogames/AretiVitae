namespace Tela_Admin
{
    partial class fGerenciarAssinatura
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
            this.lblTitulo = new System.Windows.Forms.Label();
            this.dgwAssinatura = new System.Windows.Forms.DataGridView();
            this.lblLegAtivo = new System.Windows.Forms.Label();
            this.lblLegenda = new System.Windows.Forms.Label();
            this.panel1 = new System.Windows.Forms.Panel();
            this.label1 = new System.Windows.Forms.Label();
            this.label2 = new System.Windows.Forms.Label();
            this.btnHome = new System.Windows.Forms.Button();
            ((System.ComponentModel.ISupportInitialize)(this.dgwAssinatura)).BeginInit();
            this.panel1.SuspendLayout();
            this.SuspendLayout();
            // 
            // lblTitulo
            // 
            this.lblTitulo.AutoSize = true;
            this.lblTitulo.Font = new System.Drawing.Font("Josefin Sans", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblTitulo.ForeColor = System.Drawing.Color.Black;
            this.lblTitulo.Location = new System.Drawing.Point(260, 23);
            this.lblTitulo.Name = "lblTitulo";
            this.lblTitulo.Size = new System.Drawing.Size(144, 25);
            this.lblTitulo.TabIndex = 6;
            this.lblTitulo.Text = "Lista Assinaturas";
            // 
            // dgwAssinatura
            // 
            this.dgwAssinatura.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgwAssinatura.Location = new System.Drawing.Point(24, 76);
            this.dgwAssinatura.Name = "dgwAssinatura";
            this.dgwAssinatura.Size = new System.Drawing.Size(596, 214);
            this.dgwAssinatura.TabIndex = 7;
            // 
            // lblLegAtivo
            // 
            this.lblLegAtivo.AutoSize = true;
            this.lblLegAtivo.Font = new System.Drawing.Font("Josefin Sans", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblLegAtivo.Location = new System.Drawing.Point(15, 373);
            this.lblLegAtivo.Name = "lblLegAtivo";
            this.lblLegAtivo.Size = new System.Drawing.Size(250, 18);
            this.lblLegAtivo.TabIndex = 9;
            this.lblLegAtivo.Text = "Ativo:     0 - Usuário ativo,   1 - Usuário Desativado";
            // 
            // lblLegenda
            // 
            this.lblLegenda.AutoSize = true;
            this.lblLegenda.Font = new System.Drawing.Font("Josefin Sans", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblLegenda.Location = new System.Drawing.Point(15, 346);
            this.lblLegenda.Name = "lblLegenda";
            this.lblLegenda.Size = new System.Drawing.Size(55, 18);
            this.lblLegenda.TabIndex = 8;
            this.lblLegenda.Text = "Legenda:";
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.label1);
            this.panel1.Controls.Add(this.dgwAssinatura);
            this.panel1.Controls.Add(this.lblTitulo);
            this.panel1.Location = new System.Drawing.Point(18, 12);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(642, 314);
            this.panel1.TabIndex = 10;
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Josefin Sans", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ForeColor = System.Drawing.Color.White;
            this.label1.Location = new System.Drawing.Point(243, 48);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(177, 25);
            this.label1.TabIndex = 10;
            this.label1.Text = "Areti Vitae - Network";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("Josefin Sans", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label2.ForeColor = System.Drawing.Color.White;
            this.label2.Location = new System.Drawing.Point(298, 346);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(171, 54);
            this.label2.TabIndex = 11;
            this.label2.Text = "O username e o email são únicos,\nnão é possível ter mais de uma\nconta com ambos o" +
    "s dados iguais";
            // 
            // btnHome
            // 
            this.btnHome.Location = new System.Drawing.Point(510, 365);
            this.btnHome.Name = "btnHome";
            this.btnHome.Size = new System.Drawing.Size(150, 26);
            this.btnHome.TabIndex = 30;
            this.btnHome.Text = "Início";
            this.btnHome.UseVisualStyleBackColor = true;
            this.btnHome.Click += new System.EventHandler(this.button1_Click);
            // 
            // fGerenciarAssinatura
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(673, 461);
            this.Controls.Add(this.btnHome);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.lblLegenda);
            this.Controls.Add(this.lblLegAtivo);
            this.Name = "fGerenciarAssinatura";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Gerenciar Assinaturas";
            ((System.ComponentModel.ISupportInitialize)(this.dgwAssinatura)).EndInit();
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Label lblTitulo;
        private System.Windows.Forms.DataGridView dgwAssinatura;
        private System.Windows.Forms.Label lblLegAtivo;
        private System.Windows.Forms.Label lblLegenda;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.Button btnHome;
    }
}