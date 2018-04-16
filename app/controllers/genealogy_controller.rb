class GenealogyController < ApplicationController
  layout "layouts/genealogy"
  def index
    @arr_genealogies = []
    @genealogies = Genealogy.all
    @genealogies.each do |genealogy|
      @arr_genealogies.push create_hash_genealogy(genealogy)
    end
  end

  private
  def create_hash_genealogy genealogy
    img = genealogy.image.blank? && genealogy.male? ? "http://epi.com.gr/assets/img/team/male.png" : "http://epi.com.gr/assets/img/team/female.png"
    avatar = genealogy.image.blank? ? img : genealogy.image
    {
      key: genealogy.id.to_s,
      color: "#85b793",
      name: genealogy.name.to_s,
      image: avatar.to_s,
      gioitinh: genealogy.gioitinh.to_s,
      doithu: genealogy.doithu.to_s,
      tucdanh: genealogy.tucdanh.to_s,
      conong: genealogy.conong.to_s,
      conba: genealogy.conba.to_s,
      sinhnam: genealogy.sinhnam.to_s,
      sinhquan: genealogy.sinhquan.to_s,
      tathe: genealogy.tathe.to_s,
      motang: genealogy.motang.to_s,
      biamo: genealogy.biamo.to_s,
      kyong: genealogy.kyong.to_s,
      parent: genealogy.parent_id.to_s,
    }
  end
end
