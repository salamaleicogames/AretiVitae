namespace Tela_Admin
{
    partial class fConsultaADM
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
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(fConsultaADM));
            this.panelMenu = new System.Windows.Forms.Panel();
            this.panel1 = new System.Windows.Forms.Panel();
            this.btnAlterSenha = new System.Windows.Forms.Button();
            this.btnListBuilders = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.panelMenu.SuspendLayout();
            this.SuspendLayout();
            // 
            // panelMenu
            // 
            this.panelMenu.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(64)))), ((int)(((byte)(64)))), ((int)(((byte)(64)))));
            this.panelMenu.Controls.Add(this.panel1);
            this.panelMenu.Controls.Add(this.btnAlterSenha);
            this.panelMenu.Controls.Add(this.btnListBuilders);
            this.panelMenu.Controls.Add(this.label1);
            this.panelMenu.Dock = System.Windows.Forms.DockStyle.Left;
            this.panelMenu.Location = new System.Drawing.Point(0, 0);
            this.panelMenu.Name = "panelMenu";
            this.panelMenu.Size = new System.Drawing.Size(167, 450);
            this.panelMenu.TabIndex = 3;
            // 
            // panel1
            // 
            this.panel1.Location = new System.Drawing.Point(173, 3);
            this.panel1.Name = "panel1";
            this.panel1.Size = new System.Drawing.Size(620, 439);
            this.panel1.TabIndex = 5;
            // 
            // btnAlterSenha
            // 
            this.btnAlterSenha.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnAlterSenha.Location = new System.Drawing.Point(23, 109);
            this.btnAlterSenha.Name = "btnAlterSenha";
            this.btnAlterSenha.Size = new System.Drawing.Size(115, 28);
            this.btnAlterSenha.TabIndex = 5;
            this.btnAlterSenha.Text = "Alter. Senha";
            this.btnAlterSenha.UseVisualStyleBackColor = true;
            this.btnAlterSenha.Click += new System.EventHandler(this.btnAlterSenha_Click);
            // 
            // btnListBuilders
            // 
            this.btnListBuilders.Font = new System.Drawing.Font("Josefin Sans", 9.75F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.btnListBuilders.Location = new System.Drawing.Point(23, 59);
            this.btnListBuilders.Name = "btnListBuilders";
            this.btnListBuilders.Size = new System.Drawing.Size(115, 28);
            this.btnListBuilders.TabIndex = 3;
            this.btnListBuilders.Text = "Listar";
            this.btnListBuilders.UseVisualStyleBackColor = true;
            this.btnListBuilders.Click += new System.EventHandler(this.btnListBuilders_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("Josefin Sans", 12F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(0)));
            this.label1.ForeColor = System.Drawing.Color.White;
            this.label1.Location = new System.Drawing.Point(21, 21);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(112, 25);
            this.label1.TabIndex = 0;
            this.label1.Text = "Builder`s Area";
            // 
            // Tela_Admin
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(800, 450);
            this.Controls.Add(this.panelMenu);
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.IsMdiContainer = true;
            this.Name = "Tela_Admin";
            this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
            this.Text = "Builder`s Area";
            this.Load += new System.EventHandler(this.fAreaADM_Load_1);
            this.panelMenu.ResumeLayout(false);
            this.panelMenu.PerformLayout();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel panelMenu;
        private System.Windows.Forms.Button btnAlterSenha;
        private System.Windows.Forms.Button btnListBuilders;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.Panel panel1;
    }
}