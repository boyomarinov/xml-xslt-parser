<?xml version="1.0" ?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

	<xsl:template match="team">
		<table>
			<tr>
				<td><xsl:value-of select="@name"/></td>
				<td><xsl:apply-templates select="country" /></td>
			</tr>
		</table>
		
	</xsl:template>
	<xsl:template match="country">
		<table>
			<tr>
				<td><xsl:value-of select="@name"/></td>
				<td><xsl:apply-templates select="dev" /></td>
			</tr>
		</table>
	</xsl:template>

	<xsl:template match="dev">
		<table>
			<tr>
				<td><xsl:apply-templates select="image" /></td>
				<td>
					<table>
						<tr>
							<td>Name</td>
							<td><xsl:apply-templates select="name" /></td>
						</tr>
						<tr>
							<td>Knows</td>
							<td><xsl:apply-templates select="knows" /></td>
						</tr>
					</table>
				</td>
			</tr>
		</table>
	</xsl:template> 

	<xsl:template match="image">
		<img>
			<xsl:attribute name="src">
				<xsl:value-of select="."/>
			</xsl:attribute>
			<xsl:attribute name="alt">avatar</xsl:attribute>
		</img>
	</xsl:template> 
	<xsl:template match="name">
		<b><xsl:value-of select="."/></b>
	</xsl:template> 
	<xsl:template match="knows">
		<b><xsl:value-of select="."/></b>
	</xsl:template> 

	<xsl:template match="/">
		<html>
		<body>
			<xsl:apply-templates />
		</body>
		</html>
	</xsl:template>
	
</xsl:stylesheet>