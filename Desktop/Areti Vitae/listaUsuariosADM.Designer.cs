namespace Tela_Admin
{
    partial class listaUsuariosADM
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(listaUsuariosADM));
            this.lblLegAssinatura = new System.Windows.Forms.Label();
            this.lblLegenda = new System.Windows.Forms.Label();
            this.panel1 = new System.Windows.Forms.Panel();
            this.lblSubtitulo = new System.Windows.Forms.Label();
            this.lblTitulo = new System.Windows.Forms.Label();
            this.dgwUsuariosADM = new System.Windows.Forms.DataGridView();
            this.lblDescricao2 = new System.Windows.Forms.Label();
            this.panel1.SuspendLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dgwUsuariosADM)).BeginInit();
            this.SuspendLayout();
            // 
            // lblLegAssinatura
            // 
            this.lblLegAssinatura.AutoSize = true;
            this.lblLegAssinatura.Font = new System.Drawing.Font("Josefin Sans", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblLegAssinatura.Location = new System.Drawing.Point(54, 373);
            this.lblLegAssinatura.Name = "lblLegAssinatura";
            this.lblLegAssinatura.Size = new System.Drawing.Size(135, 18);
            this.lblLegAssinatura.TabIndex = 12;
            this.lblLegAssinatura.Text = "Tipo: 1 - ADM;   2 - Builder";
            // 
            // lblLegenda
            // 
            this.lblLegenda.AutoSize = true;
            this.lblLegenda.Font = new System.Drawing.Font("Josefin Sans", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblLegenda.Location = new System.Drawing.Point(54, 350);
            this.lblLegenda.Name = "lblLegenda";
            this.lblLegenda.Size = new System.Drawing.Size(55, 18);
            this.lblLegenda.TabIndex = 11;
            this.lblLegenda.Text = "Legenda:";
            // 
            // panel1
            // 
            this.panel1.Controls.Add(this.lblSubtitulo);
            this.panel1.Controls.Add(this.lblTitulo);
            this.panel1.Controls.Add(this.dgwUsuariosADM);
            this.panel1.Location = new System.Drawing.Point(30, 21);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(525, 314);
            this.panel1.TabIndex = 13;
            // 
            // lblSubtitulo
            // 
            this.lblSubtitulo.AutoSize = true;
            this.lblSubtitulo.Font = new System.Drawing.Font("Josefin Sans", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblSubtitulo.Location = new System.Drawing.Point(225, 37);
            this.lblSubtitulo.Name = "lblSubtitulo";
            this.lblSubtitulo.Size = new System.Drawing.Size(97, 25);
            this.lblSubtitulo.TabIndex = 12;
            this.lblSubtitulo.Text = "Areti Vitae";
            // 
            // lblTitulo
            // 
            this.lblTitulo.AutoSize = true;
            this.lblTitulo.Font = new System.Drawing.Font("Josefin Sans", 12F, System.Drawing.FontStyle.Bold, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblTitulo.Location = new System.Drawing.Point(186, 12);
            this.lblTitulo.Name = "lblTitulo";
            this.lblTitulo.Size = new System.Drawing.Size(179, 25);
            this.lblTitulo.TabIndex = 11;
            this.lblTitulo.Text = "Areti Vitae - Builder`s";
            // 
            // dgwUsuariosADM
            // 
            this.dgwUsuariosADM.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dgwUsuariosADM.Location = new System.Drawing.Point(16, 80);
            this.dgwUsuariosADM.Name = "dgwUsuariosADM";
            this.dgwUsuariosADM.Size = new System.Drawing.Size(492, 214);
            this.dgwUsuariosADM.TabIndex = 10;
            // 
            // lblDescricao2
            // 
            this.lblDescricao2.Font = new System.Drawing.Font("Josefin Sans", 8.25F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.lblDescricao2.Location = new System.Drawing.Point(271, 350);
            this.lblDescricao2.Name = "lblDescricao2";
            this.lblDescricao2.Size = new System.Drawing.Size(227, 41);
            this.lblDescricao2.TabIndex = 29;
            this.lblDescricao2.Text = "Lista de adminstradores, uso exclusivo\nde adm de hierarquia Builder";
            // 
            // listaUsuariosADM
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(604, 400);
            this.Controls.Add(this.lblDescricao2);
            this.Controls.Add(this.panel1);
            this.Controls.Add(this.lblLegAssinatura);
            this.Controls.Add(this.lblLegenda);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.MinimizeBox = false;
            this.Name = "listaUsuariosADM";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Lista de Administradores";
            this.Load += new System.EventHandler(this.listaUsuariosADM_Load);
            this.panel1.ResumeLayout(false);
            this.panel1.PerformLayout();
            ((System.ComponentModel.ISupportInitialize)(this.dgwUsuariosADM)).EndInit();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.Label lblLegAssinatura;
        private System.Windows.Forms.Label lblLegenda;
        private System.Windows.Forms.Panel panel1;
        private System.Windows.Forms.DataGridView dgwUsuariosADM;
        private System.Windows.Forms.Label lblSubtitulo;
        private System.Windows.Forms.Label lblTitulo;
        private System.Windows.Forms.Label lblDescricao2;
    }
}